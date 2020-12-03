<template>
  <div :id="'inputmask-' + _uid">
    <TextField
      :type="type"
      :value="value"
      :variant="variant"
      :label="label"
      :name="name"
      :shaped="shaped"
      :leftIcon="leftIcon"
      :rightIcon="rightIcon"
      :helperText="helperText"
      :required="required"
      :disabled="disabled"
      :ref="'textfieldmask' + _uid"
    />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import TextField from "@/components/TextField.vue";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop, Watch } from "vue-property-decorator";
import * as VMasker from "vanilla-masker";

@Component({
  components: {
    TextField
  }
})
export default class TextFieldMask extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "text" }) private type!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: "filled" }) private variant!: string;
  @Prop({ default: "Label" }) private label!: string;
  @Prop({ default: "" }) private name!: string;
  @Prop({ default: false }) private shaped!: boolean;
  @Prop({ default: "" }) private leftIcon!: string;
  @Prop({ default: "" }) private rightIcon!: string;
  @Prop({ default: "" }) private helperText!: string;
  @Prop({ default: null }) private required!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: "" }) private mask!: string | string[];
  @Prop({ default: false }) private money!: boolean;
  @Prop({ default: null }) private moneyOptions!: any;
  @Prop({ default: "$" }) private moneyUnit!: string;
  @Prop({ default: false }) private blurClean!: boolean;

  public element = new VComponent();
  public unmasked = "";
  private textField!: TextField;
  private input: any;
  private activeMask: string | null = null;

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=inputmask${this._uid}]`
    );

    this.textField = this.$refs[`textfieldmask${this._uid}`] as TextField;
    this.input = this.textField.element.dom.querySelector("input");
    this.unmasked = this.value;

    this.input.addEventListener("change", () => {
      this.$emit("input", this.input.value);
      this.$emit("change", this.input.value);
    });

    if (this.required) {
      this.input.addEventListener("blur", this.validateMask);
    }

    this.updateMaskValue();
  }

  /**
   * added to update the input value based on changes made in value prop.
   */
  @Watch("value")
  private updateInputValue() {
    VMasker(this.input).unMask();
    this.unmasked = this.input.value;
    window.setTimeout(() => {
      this.updateMaskValue();
    });
  }

  /**
   * added to update the mask on changes made in value prop.
   */
  @Watch("mask")
  private updateMask() {
    this.input.removeEventListener("input", this.dynamicMaskHandler);
    VMasker(this.input).unMask();
    window.setTimeout(() => {
      this.updateMaskValue();
    });
  }

  /**
   * update the mask value.
   */
  private updateMaskValue() {
    this.maskInput();
    window.setTimeout(() => {
      this.$emit("input", this.input.value);
      this.$emit("change", this.input.value);
    });
  }

  /**
   * mask the input value.
   */
  private maskInput() {
    if (this.mask) {
      if (this.money) {
        this.maskMoney();
      } else if (Array.isArray(this.mask)) {
        this.maskDynamic();
      } else {
        this.maskSimple();
      }
    }
  }

  /**
   * mask using money format.
   */
  private maskMoney() {
    this.activeMask = null;
    if (this.moneyOptions) {
      VMasker(this.input).maskMoney(this.moneyOptions);
    } else {
      VMasker(this.input).maskMoney({
        precision: 2,
        separator: ",",
        delimiter: ".",
        unit: this.moneyUnit
      });
    }
  }

  /**
   * mask using dynamic format.
   */
  private maskDynamic() {
    const mask = this.dynamicGetMask();
    this.input.addEventListener("input", this.dynamicMaskHandler, false);
    VMasker(this.input).maskPattern(mask);
  }

  /**
   * mask using simple format.
   */
  private maskSimple() {
    this.activeMask = this.mask as string;
    VMasker(this.input).maskPattern(this.mask);
  }

  /**
   * return the current mask for dynamic mask.
   */
  private dynamicGetMask() {
    // sort the masks based on length
    const masks = (this.mask as string[])
      .map(mask => {
        return mask;
      })
      .sort((a, b) => (a.length < b.length ? -1 : 1));

    // get the current mask based on the input length
    const selMask = masks.filter(mask =>
      this.hasSpecialCharacter(this.input.value)
        ? this.input.value.length <= mask.length
        : this.input.value.length + this.countMaskSpecialCharacters(mask) <=
          mask.length
    )?.[0];
    const selMaskFixed = selMask ? selMask : masks[masks.length - 1];
    this.activeMask = selMaskFixed;
    return selMaskFixed;
  }

  /**
   * handle the changes of the dynamic masks.
   */
  private dynamicMaskHandler(event: any) {
    const c = event.target;
    const v = c.value.replace(/\D/g, "");
    const maskSelected = this.dynamicGetMask();
    VMasker(c).unMask();
    VMasker(c).maskPattern(maskSelected);
    c.value = VMasker.toPattern(v, maskSelected);
  }

  /**
   * validate the input.
   */
  private validateMask() {
    if (this.required && this.activeMask) {
      if (this.input.value.length !== this.activeMask.length) {
        this.textField.element.mdc.textField.valid = false;
      } else {
        this.textField.element.mdc.textField.valid = true;
      }
    }
  }

  /**
   * check if has special character.
   */
  private hasSpecialCharacter(value: string) {
    return value.replaceAll(/[a-zA-Z0-9]/g, "").length > 0;
  }

  /**
   * count how many special character (!= A and != 9) the mask have.
   */
  private countMaskSpecialCharacters(mask: string) {
    return mask
      .split("")
      .filter(caracter => caracter !== "A" && caracter !== "9").length;
  }
}
</script>

<style lang="scss"></style>
