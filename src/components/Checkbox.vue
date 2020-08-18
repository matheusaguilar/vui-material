<template>
  <div class="mdc-form-field" :id="id" :[element.dataid]="'checkbox' + _uid">
    <div class="mdc-checkbox mdc-checkbox--touch">
      <input
        type="checkbox"
        class="mdc-checkbox__native-control"
        :id="'checkbox-' + _uid"
        v-bind:checked="value"
        v-on="inputListeners()"
      />
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path
            class="mdc-checkbox__checkmark-path"
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
      <div class="mdc-checkbox__ripple"></div>
    </div>
    <label class="checkbox-label" :for="'checkbox-' + _uid">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCFormField } from "@material/form-field/index";
import { MDCCheckbox } from "@material/checkbox/index";

@Component
export default class Checkbox extends Vue {
  @Prop() private id!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: "Label" }) private label!: string;

  private element = new VComponent();

  inputListeners() {
    return Object.assign({}, this.$listeners, {
      input: (event: any) => {
        this.$emit("input", event.target.checked);
      }
    });
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=checkbox${this._uid}]`
    );

    if (this.element.dom) {
      const checkbox = this.element.dom.querySelector(".mdc-checkbox");
      if (checkbox) {
        this.element.mdc = {
          formField: new MDCFormField(this.element.dom),
          checkbox: new MDCCheckbox(checkbox)
        };
        this.element.mdc.input = this.element.mdc.checkbox;
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/checkbox";
@use "@material/form-field";
@include checkbox.core-styles;
@include form-field.core-styles;

.mdc-form-field {
  .checkbox-label:hover {
    cursor: pointer;
  }
}
</style>
