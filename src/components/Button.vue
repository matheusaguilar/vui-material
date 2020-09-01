<template>
  <button
    :type="type"
    :class="'mdc-button' + buttonClass"
    :id="id"
    :[element.dataid]="'button' + _uid"
    :disabled="disabled"
  >
    <div class="mdc-button__ripple"></div>
    <i
      class="material-icons mdc-button__icon"
      aria-hidden="true"
      v-if="leftIcon"
      >{{ leftIcon }}</i
    >
    <span class="mdc-button__label">{{ text }}</span>
    <i
      class="material-icons mdc-button__icon"
      aria-hidden="true"
      v-if="rightIcon"
      >{{ rightIcon }}</i
    >
  </button>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCRipple } from "@material/ripple/index";

@Component
export default class Button extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "button" }) private type!: string;
  @Prop({ default: "Text" }) private text!: string;
  @Prop({ default: "raised" }) private variant!: string;
  @Prop({ default: "" }) private leftIcon!: string;
  @Prop({ default: "" }) private rightIcon!: string;
  @Prop({ default: false }) private disabled!: boolean;

  public element = new VComponent();

  private classMap: any = {
    text: "",
    outlined: " mdc-button--outlined",
    raised: " mdc-button--raised",
    unelevated: " mdc-button--unelevated"
  };

  get buttonClass() {
    return this.classMap[this.variant] ? this.classMap[this.variant] : "";
  }

  mounted() {
    this.element.dom = document.querySelector(
      `button[${this.element.dataid}=button${this._uid}]`
    );
    if (this.element.dom) {
      const ripple = this.element.dom.querySelector(".mdc-button__ripple");
      if (ripple) {
        this.element.ripple = new MDCRipple(ripple);
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/button";
@use "@material/ripple";

@include button.core-styles;
.mdc-button__ripple {
  @include ripple.surface;
  @include ripple.radius-bounded;
  @include ripple.states;
}
</style>
