<template>
  <div
    class="mdc-layout-grid__inner"
    :id="id"
    :[element.dataid]="'layout-inner' + _uid"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class LayoutGridInner extends Vue {
  @Prop() private id!: string;

  private element = new VComponent();

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=layout-inner${this._uid}]`
    );
  }
}
</script>
