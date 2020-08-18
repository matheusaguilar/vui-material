<template>
  <div class="mdc-layout-grid" :id="id" :[element.dataid]="'layout' + _uid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class LayoutGrid extends Vue {
  @Prop() private id!: string;

  private element = new VComponent();

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=layout${this._uid}]`
    );
  }
}
</script>

<style lang="scss">
@import "@material/layout-grid/mdc-layout-grid";
</style>
