<template>
  <button
    class="mdc-icon-button"
    :id="id"
    :[element.dataid]="'button' + _uid"
    @click="changeOn()"
  >
    <i class="material-icons mdc-icon-button__icon">{{ on ? iconOn : icon }}</i>
    <i
      class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on colored-btn-on"
      v-if="iconOn"
      >{{ iconOn }}</i
    >
  </button>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCIconButtonToggle } from "@material/icon-button";

@Component
export default class IconButton extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "" }) private icon!: string;
  @Prop({ default: "" }) private iconOn!: string;

  public element = new VComponent();
  private on = false;

  changeOn() {
    if (this.iconOn) {
      this.on = !this.on;
    }
  }

  mounted() {
    this.element.dom = document.querySelector(
      `button[${this.element.dataid}=button${this._uid}]`
    );
    if (this.element.dom) {
      this.element.mdc = new MDCIconButtonToggle(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/icon-button";
@include icon-button.core-styles;
@import "@material/theme/mdc-theme";

.colored-btn-on {
  color: $mdc-theme-secondary;
}
</style>
