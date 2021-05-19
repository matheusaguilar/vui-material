<template>
  <aside
    :class="'mdc-drawer' + variantClass"
    :id="id"
    :[element.dataid]="'drawer' + _uid"
  >
    <div class="mdc-drawer__header" v-if="hasHeaderSlot">
      <slot name="header"></slot>
    </div>
    <div class="mdc-drawer__content">
      <slot name="body" v-if="!items"></slot>

      <nav class="mdc-list" v-else>
        <a
          :class="'mdc-list-item' + activeClass(item.active)"
          :tabindex="index"
          :href="item.href"
          aria-current="page"
          v-for="(item, index) in itemsParsed"
          :key="index"
          @click="callAction($event, item.action)"
        >
          <span class="mdc-list-item__ripple"></span>
          <i
            class="material-icons mdc-list-item__graphic"
            aria-hidden="true"
            v-if="item.icon"
            >{{ item.icon }}</i
          >
          <span class="mdc-list-item__text">{{ item.name }}</span>
          <i
            class="mdc-drawer-notification material-icons"
            v-show="item.notification"
            >notifications</i
          >
        </a>
      </nav>
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCDrawer } from "@material/drawer";
import TopAppBar from "./TopAppBar.vue";

@Component({
  components: {
    TopAppBar
  }
})
export default class Drawer extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "dismissible" }) private variant!: string;
  @Prop({ default: null }) private items!: any[];

  public element = new VComponent();
  public itemsParsed: any = [];
  private variantClassesMap: any = {
    dismissible: " mdc-drawer--dismissible",
    modal: " mdc-drawer--modal"
  };

  get hasHeaderSlot() {
    return !!this.$slots.header;
  }

  get variantClass() {
    return this.variantClassesMap[this.variant]
      ? this.variantClassesMap[this.variant]
      : this.variantClassesMap.dismissible;
  }

  activeClass(active: boolean) {
    return active ? " mdc-list-item--activated" : "";
  }

  isFunction(obj: any) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }

  callAction(event: any, action: any) {
    if (action) {
      action(event);
    }
  }

  change() {
    if (this.element.mdc) {
      this.element.mdc.open = !this.element.mdc.open;
    }
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

  loadItems() {
    this.itemsParsed = this.items?.map((item: any) =>
      this.element.mergeAttributes(
        {
          name: "",
          icon: null,
          active: false,
          href: "#",
          action: null,
          notification: false
        },
        item
      )
    );
  }

  created() {
    this.loadItems();
  }

  mounted() {
    this.element.dom = document.querySelector(
      `aside[${this.element.dataid}=drawer${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = MDCDrawer.attachTo(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/drawer";
@use "@material/list";

@include drawer.core-styles;
@include drawer.modal-core-styles;
@include drawer.dismissible-core-styles;
@include list.core-styles;

@import "@material/theme/mdc-theme";

.mdc-drawer {
  .mdc-drawer-notification {
    font-size: 18px;
    color: $mdc-theme-secondary;
    margin-left: auto;
  }
}
</style>
