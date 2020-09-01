<template>
  <div class="layout-container">
    <!--DrawerModal-->
    <Drawer
      ref="drawerModal"
      variant="modal"
      v-if="drawer && drawerItems"
      :items="drawerItems"
      @click="clickDrawerItem"
    >
      <template v-slot:header>
        <slot name="drawer-header"></slot>
      </template>

      <template v-slot:body>
        <slot name="drawer-body"></slot>
      </template>
    </Drawer>
    <div class="mdc-drawer-scrim"></div>

    <div class="topappbar-container">
      <!--Drawer-->
      <Drawer
        ref="drawerSide"
        v-if="drawer && drawerItems"
        :items="drawerItems"
        @click="clickDrawerItem"
      >
        <template v-slot:header>
          <slot name="drawer-header"></slot>
        </template>

        <template v-slot:body>
          <slot name="drawer-body"></slot>
        </template>
      </Drawer>

      <div class="mdc-drawer-app-content">
        <!--TopAppBar-->
        <TopAppBar
          :variant="topAppMode"
          :title="title"
          :menu="drawer && drawerItems ? true : false"
          @menu="clickMenu"
          @title="clickTitle"
        >
          <slot name="topappbar"></slot>
        </TopAppBar>

        <!--Content-->
        <main class="main-content" id="main-content">
          <div class="mdc-top-app-bar--fixed-adjust"></div>
          <slot name="content"></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Ref } from "vue-property-decorator";
import { Component, Prop } from "vue-property-decorator";
import TopAppBar from "./TopAppBar.vue";
import Drawer from "./Drawer.vue";

@Component({
  components: {
    TopAppBar,
    Drawer
  }
})
export default class LayoutApp extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "standard" }) private topAppMode!: string;
  @Prop({ default: "Title" }) private topAppTitle!: string;
  @Prop({ default: false }) private drawer!: boolean;
  @Prop({ default: null }) private drawerItems!: any[];
  @Prop({ default: 800 }) private drawerChange!: number;
  @Prop({ default: "Title" }) private title!: string;

  @Ref("drawerModal") readonly drawerModal!: any;
  @Ref("drawerSide") readonly drawerSide!: any;
  @Ref("topAppBar") readonly topAppBar!: any;

  /**
   * return the active modal.
   */
  private getDrawerActive() {
    return window.innerWidth < this.drawerChange
      ? this.drawerModal
      : this.drawerSide;
  }

  /**
   * When click on topAppBar menu, open or close modal
   */
  clickMenu() {
    const drawer = this.getDrawerActive();
    const state = drawer.element.mdc.open;

    this.drawerSide.close();
    this.drawerModal.close();

    if (!state) {
      drawer.change();
    }

    this.$emit("drawer", !state);
  }

  /**
   * emit event on drawer item clicked.
   */
  clickDrawerItem(index: any) {
    this.$emit("drawer-item", index);
  }

  /**
   * emit event on topAppBar title clicked.
   */
  clickTitle() {
    this.$emit("title");
  }

  /**
   * open the drawer modal.
   */
  openDrawer() {
    const drawer = this.getDrawerActive();
    drawer.open();
  }

  /**
   * close the drawer modal.
   */
  closeDrawer() {
    const drawer = this.getDrawerActive();
    drawer.close();
  }
}
</script>

<style lang="scss">
.layout-container {
  width: 100%;
  height: 100%;

  .topappbar-container {
    display: flex;
    width: 100%;
    height: 100%;

    .mdc-drawer-app-content {
      flex: auto;
      overflow: auto;
      position: relative;

      .app-bar {
        position: absolute;
      }

      .main-content {
        height: 100%;
      }
    }

    .mdc-top-app-bar--fixed {
      position: fixed !important;
    }

    .mdc-top-app-bar--prominent + #main-content .mdc-top-app-bar--fixed-adjust {
      padding-top: 128px;
    }

    .mdc-top-app-bar--short + #main-content .mdc-top-app-bar--fixed-adjust {
      padding-top: 56px;
    }

    .mdc-top-app-bar--dense + #main-content .mdc-top-app-bar--fixed-adjust {
      padding-top: 48px;
    }
  }
}
</style>
