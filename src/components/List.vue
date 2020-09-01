<template>
  <ul class="mdc-list" :id="id" :[element.dataid]="'list' + _uid">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";

@Component
export default class List extends Vue {
  @Prop() private id!: string;

  public element = new VComponent();

  mounted() {
    this.element.dom = document.querySelector(
      `ul[${this.element.dataid}=list${this._uid}]`
    );

    this.element.mdc = new MDCList(this.element.dom);

    this.element.ripple = this.element.mdc.listElements.map(
      (listItemEl: any) => new MDCRipple(listItemEl)
    );
  }
}
</script>

<style lang="scss">
@use "@material/list";
@include list.core-styles;
</style>
