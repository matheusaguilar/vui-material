<template>
  <div class="mdc-touch-target-wrapper" :[element.dataid]="'button' + _uid">
    <button :type="type" :class="'mdc-fab' + buttonClass + miniClass" :id="id">
      <div class="mdc-fab__ripple"></div>
      <i
        class="material-icons mdc-fab__icon"
        aria-hidden="true"
        v-if="leftIcon"
        >{{ leftIcon }}</i
      >
      <span class="mdc-fab__label">{{ text }}</span>
      <i
        class="material-icons mdc-fab__icon"
        aria-hidden="true"
        v-if="rightIcon"
        >{{ rightIcon }}</i
      >
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCRipple } from "@material/ripple/index";

@Component
export default class FabButton extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "button" }) private type!: string;
  @Prop({ default: "" }) private text!: string;
  @Prop({ default: "standard" }) private variant!: string;
  @Prop({ default: false }) private mini!: boolean;
  @Prop({ default: null }) private leftIcon!: string;
  @Prop({ default: null }) private rightIcon!: string;

  private element = new VComponent();

  private classMap: any = {
    standard: "",
    extended: " mdc-fab--extended"
  };

  get buttonClass() {
    return this.classMap[this.variant] ? this.classMap[this.variant] : "";
  }

  get miniClass() {
    return this.mini ? " mdc-fab--mini" : "";
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=button${this._uid}]`
    );

    if (this.element.dom) {
      const ripple = this.element.dom.querySelector("button");
      if (ripple) {
        this.element.ripple = new MDCRipple(ripple);
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/fab";
@use "@material/ripple";

@include fab.core-styles;
.mdc-button__ripple {
  @include ripple.surface;
  @include ripple.radius-bounded;
  @include ripple.states;
}
</style>
