<template>
  <div
    class="text-field-container"
    :id="id"
    :[element.dataid]="'textarea' + _uid"
  >
    <label
      :class="
        'mdc-text-field mdc-text-field--textarea mdc-text-field--no-label' +
          variantClass
      "
    >
      <!--CharCounter-->
      <div class="mdc-text-field-character-counter" v-if="maxlength">
        0 / {{ maxlength }}
      </div>
      <span class="mdc-text-field__ripple" v-if="variant != 'outlined'"></span>
      <!-- <span class="mdc-text-field__resizer"> -->
      <textarea
        :id="'textarea-' + _uid"
        class="mdc-text-field__input"
        rows="6"
        cols="40"
        aria-label="Label"
        :maxlength="maxlength"
        :required="required ? true : false"
        :disabled="disabled"
        :pattern="pattern ? pattern : false"
        :title="title ? title : false"
        v-bind:value="value"
        v-on="inputListeners()"
      ></textarea>
      <!-- </span> -->
      <span class="mdc-line-ripple" v-if="variant != 'outlined'"></span>

      <span class="mdc-notched-outline" v-if="variant == 'outlined'">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCTextField } from "@material/textfield";
import { MDCTextFieldCharacterCounter } from "@material/textfield/character-counter";

@Component
export default class TextArea extends Vue {
  @Prop() private id!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: "filled" }) private variant!: string;
  @Prop({ default: "Label" }) private label!: string;
  @Prop({ default: null }) private required!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: null }) private pattern!: string;
  @Prop({ default: null }) private title!: string;
  @Prop({ default: null }) private maxlength!: string;
  @Prop({ default: null }) private minlength!: string;

  public element = new VComponent();

  get variantClass() {
    return this.variant == "outlined"
      ? " mdc-text-field--outlined"
      : " mdc-text-field--filled";
  }

  @Watch("value")
  onValueChanged(value: string) {
    if (this.element?.mdc) {
      this.element.mdc.value = value;
    }
  }

  inputListeners() {
    return Object.assign({}, this.$listeners, {
      input: (event: any) => {
        this.$emit("input", event.target.value);
      }
    });
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=textarea${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = {};
      const textfield = this.element.dom.querySelector(".mdc-text-field");
      const charCounter = this.element.dom.querySelector(
        ".mdc-text-field-character-counter"
      );

      if (textfield) {
        this.element.mdc.textField = new MDCTextField(textfield);
      }

      if (charCounter) {
        this.element.mdc.charCounter = new MDCTextFieldCharacterCounter(
          charCounter
        );
      }

      if (this.minlength) {
        this.element.mdc.minlength = this.minlength;
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/floating-label/mdc-floating-label";
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";
@include textfield.core-styles;

.text-field-container {
  min-width: 240px;

  //fix to container
  .mdc-text-field {
    width: 100%;
  }

  //   textarea {
  //     resize: none;
  //   }
}
</style>
