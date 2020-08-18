<template>
  <div class="mdc-chip-set" :id="id" :[element.dataid]="'chipgrid' + _uid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCChipSet } from "@material/chips";

@Component
export default class ChipGrid extends Vue {
  @Prop() private id!: string;

  private element = new VComponent();

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=chipgrid${this._uid}]`
    );
    if (this.element.dom) {
      this.element.mdc = new MDCChipSet(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/chips/mdc-chips";
</style>
