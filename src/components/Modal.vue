<template>
  <div
    class="mdc-dialog"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="my-dialog-title"
    aria-describedby="my-dialog-content"
    :id="id"
    :[element.dataid]="'modal' + _uid"
  >
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
        <h2 class="mdc-dialog__title">{{ title }}</h2>
        <div class="mdc-dialog__content" v-if="text">{{ text }}</div>
        <span tabindex="0" style="visible: hidden"></span>
        <footer
          class="mdc-dialog__actions"
          v-if="simple == 'true' || simple == true"
        >
          <button
            type="button"
            class="mdc-button mdc-dialog__button"
            data-mdc-dialog-action="no"
            @click="noAction"
          >
            <span class="mdc-button__label">{{ labelNo }}</span>
          </button>
          <button
            type="button"
            class="mdc-button mdc-dialog__button"
            data-mdc-dialog-action="yes"
            @click="yesAction"
          >
            <span class="mdc-button__label">{{ labelYes }}</span>
          </button>
        </footer>
        <slot v-else></slot>
      </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCDialog } from "@material/dialog";

@Component
export default class Modal extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "Title" }) private title!: string;
  @Prop({ default: null }) private text!: string;
  @Prop({ default: true }) private simple!: boolean;
  @Prop({ default: "No" }) private labelNo!: string;
  @Prop({ default: "Yes" }) private labelYes!: string;

  private element = new VComponent();

  private noAction() {
    this.$emit("no");
  }

  private yesAction() {
    this.$emit("yes");
  }

  open() {
    if (this.element.mdc) {
      this.element.mdc.open();
    }
  }

  close() {
    if (this.element.mdc) {
      this.element.mdc.close();
    }
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=modal${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = new MDCDialog(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/dialog";
@include dialog.core-styles;
</style>
