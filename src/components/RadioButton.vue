<template>
  <div class="mdc-form-field" :id="id" :[element.dataid]="'radiobtn' + _uid">
    <div class="mdc-radio">
      <input
        class="mdc-radio__native-control"
        type="radio"
        :id="'radio-' + _uid"
        name="radios"
        :value="val"
        v-bind:checked="isChecked"
        v-on="inputListeners()"
      />
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>
    <label :for="'radio-' + _uid">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";

@Component
export default class RadioButton extends Vue {
  @Prop() private id!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: null }) private val!: string;
  @Prop({ default: "Label" }) private label!: string;

  public element = new VComponent();

  get isChecked() {
    return this.value === this.val;
  }

  inputListeners() {
    return Object.assign({}, this.$listeners, {
      input: () => {
        // make work with v-model
        this.$emit("input", this.val);
      }
    });
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=radiobtn${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = {
        formField: new MDCFormField(this.element.dom)
      };

      const radio = this.element.dom.querySelector(".mdc-radio");
      if (radio) {
        this.element.mdc.radio = new MDCRadio(radio);
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/radio";
@use "@material/form-field";
@include radio.core-styles;
@include form-field.core-styles;
</style>
