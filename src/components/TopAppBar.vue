<template>
  <header
    :id="id"
    :class="'mdc-top-app-bar app-bar' + variantClass"
    :[element.dataid]="'topappbar' + _uid"
  >
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <button
          v-if="menu"
          @click="clickMenu"
          class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
        >
          menu
        </button>
        <span class="mdc-top-app-bar__title">{{ title }}</span>
      </section>

      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar"
      >
        <slot></slot>
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCTopAppBar } from "@material/top-app-bar";

@Component
export default class TopAppBar extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "standard" }) private variant!: string;
  @Prop({ default: false }) private menu!: boolean;
  @Prop({ default: "Title" }) private title!: string;

  private element = new VComponent();

  private variantClassesMap: any = {
    standard: "",
    short: " mdc-top-app-bar--short",
    fixed: " mdc-top-app-bar--fixed",
    prominent: " mdc-top-app-bar--prominent",
    dense: " mdc-top-app-bar--dense"
  };

  get variantClass() {
    return this.variantClassesMap[this.variant]
      ? this.variantClassesMap[this.variant]
      : "";
  }

  clickMenu() {
    this.$emit("menu");
  }

  mounted() {
    this.element.dom = document.querySelector(
      `header[${this.element.dataid}=topappbar${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = new MDCTopAppBar(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/icon-button";
@use "@material/top-app-bar/mdc-top-app-bar";

@include icon-button.core-styles;
</style>
