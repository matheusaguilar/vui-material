<template>
  <div class="mdc-snackbar" :id="id" :[element.dataid]="'snackbar' + _uid">
    <div class="mdc-snackbar__surface">
      <div class="mdc-snackbar__label" role="status">
        {{ text }}
      </div>
      <div class="mdc-snackbar__actions" v-if="action">
        <button
          type="button"
          class="mdc-button mdc-snackbar__action"
          @click="clicked"
        >
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">{{ action }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCSnackbar } from "@material/snackbar";

@Component
export default class Snackbar extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "Text" }) private text!: string;
  @Prop({ default: "Action" }) private action!: string;

  public element = new VComponent();

  open() {
    if (this.element.mdc) {
      this.element.mdc.open();
    }
  }

  clicked() {
    this.$emit("click");
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=snackbar${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = new MDCSnackbar(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/snackbar/mdc-snackbar";
@import "@material/theme/mdc-theme";

.mdc-snackbar__action:not(:disabled) {
  color: $mdc-theme-secondary;
}
</style>
