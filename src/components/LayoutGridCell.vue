<template>
  <div :class="classes" :id="id" :[element.dataid]="'layout-cell' + _uid">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class LayoutGridCell extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "12" }) private desktop!: string;
  @Prop({ default: "8" }) private tablet!: string;
  @Prop({ default: "4" }) private phone!: string;

  private element = new VComponent();

  get classes() {
    return (
      `mdc-layout-grid__cell--span-${this.desktop}-desktop` +
      ` mdc-layout-grid__cell--span-${this.tablet}-tablet` +
      ` mdc-layout-grid__cell--span-${this.phone}-phone`
    );
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=layout-cell${this._uid}]`
    );
  }
}
</script>
