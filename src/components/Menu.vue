<template>
  <div
    class="mdc-menu mdc-menu-surface"
    :id="id"
    :[element.dataid]="'menu' + _uid"
  >
    <slot v-if="!items"></slot>
    <ul
      class="mdc-list"
      role="menu"
      aria-hidden="true"
      aria-orientation="vertical"
      tabindex="-1"
      v-else
    >
      <li
        class="mdc-list-item"
        role="menuitem"
        v-for="(item, index) in items"
        :key="index"
        @click="clicked(index)"
      >
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCMenu } from "@material/menu";

@Component
export default class Menu extends Vue {
  @Prop() private id!: string;
  @Prop({ default: null }) private items!: string[];

  private element = new VComponent();

  clicked(index: any) {
    this.$emit("click", index);
  }

  open() {
    if (this.element.mdc) {
      this.element.mdc.open = true;
    }
  }

  close() {
    if (this.element.mdc) {
      this.element.mdc.open = false;
    }
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=menu${this._uid}]`
    );

    if (this.element.dom) {
      this.element.dom.parentElement.className += " mdc-menu-surface--anchor";
      this.element.mdc = new MDCMenu(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/list/mdc-list";
@use "@material/menu-surface/mdc-menu-surface";
@use "@material/menu/mdc-menu";
</style>
