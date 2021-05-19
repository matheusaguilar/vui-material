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
          @click="action.call"
        >
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">{{ action.label }}</span>
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

interface Action {
  call: Function;
  label: string;
}

@Component
export default class Snackbar extends Vue {
  @Prop() private id!: string;

  public element = new VComponent();
  public text = "";
  public action: Action | undefined;

  open(text: string, action?: Action) {
    this.text = text;
    this.action = action;
    if (this.element.mdc) {
      this.element.mdc.open();
    }
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
