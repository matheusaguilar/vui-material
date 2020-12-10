<template>
  <div
    role="progressbar"
    :class="'mdc-linear-progress' + isClosedClass"
    aria-label="Progress Bar"
    aria-valuemin="0"
    aria-valuemax="1"
    aria-valuenow="0"
    :id="id"
    :[element.dataid]="'linearprogress' + _uid"
  >
    <div class="mdc-linear-progress__buffer">
      <div class="mdc-linear-progress__buffer-bar"></div>
      <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCLinearProgress } from "@material/linear-progress";

@Component
export default class LinearProgress extends Vue {
  @Prop() private id!: string;
  @Prop({ default: true }) private start!: boolean;

  private isClosed = false;
  public element = new VComponent();

  get isClosedClass() {
    return this.isClosed ? " mdc-linear-progress--closed" : "";
  }

  show() {
    this.isClosed = false;
  }

  hide() {
    this.isClosed = true;
  }

  determinate(value: boolean) {
    this.element.mdc.determinate = value;
  }

  progress(value: number) {
    this.element.mdc.progress = value;
  }

  buffer(value: number) {
    this.element.mdc.buffer = value;
  }

  reverse(value: boolean) {
    this.element.mdc.reverse = value;
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=linearprogress${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = new MDCLinearProgress(this.element.dom);
      if (this.start && (this.start === true || this.start === "true")) {
        this.determinate(false);
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/linear-progress";

@include linear-progress.core-styles;
</style>
