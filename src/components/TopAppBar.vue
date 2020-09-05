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
        <!--Menu button-->
        <button
          v-if="menu"
          @click="clickMenu"
          class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
        >
          menu
        </button>

        <!--Title-->
        <a
          :href="titleHref"
          class="mdc-top-app-bar__title topappbar-title-redirect"
          v-if="titleHref"
          >{{ title }}</a
        >
        <span class="mdc-top-app-bar__title" v-else>{{ title }}</span>
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
  @Prop({ default: null }) private titleHref!: string;

  public element = new VComponent();

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
@import "@material/theme/mdc-theme";

@include icon-button.core-styles;

.mdc-top-app-bar {
  .topappbar-title-redirect {
    color: $mdc-theme-on-primary;
  }
}
</style>
