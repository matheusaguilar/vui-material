<template>
  <div class="layout-container">
    <!--DrawerModal-->
    <Drawer
      ref="drawerModal"
      variant="modal"
      v-if="drawer || drawerItems"
      :items="drawerItems"
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
        v-if="drawer || drawerItems"
        :items="drawerItems"
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
          :menu="drawer || drawerItems ? true : false"
          @menu="clickMenu"
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
  @Prop({ default: "standard" }) private topAppMode!: boolean;
  @Prop({ default: "Title" }) private topAppTitle!: string;
  @Prop({ default: false }) private drawer!: boolean;
  @Prop({ default: null }) private drawerItems!: any[];
  @Prop({ default: 800 }) private drawerChange!: number;

  @Ref("drawerModal") readonly drawerModal!: any;
  @Ref("drawerSide") readonly drawerSide!: any;

  clickMenu() {
    if (window.innerWidth < this.drawerChange) {
      this.drawerSide.close();
      this.drawerModal.change();
    } else {
      this.drawerModal.close();
      this.drawerSide.change();
    }
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
  }

  .mdc-drawer-app-content {
    flex: auto;
    overflow: auto;
    position: relative;
  }

  .main-content {
    overflow: auto;
    height: 100%;
  }

  .app-bar {
    position: absolute;
  }
}

.tee {
  width: 100%;
  height: 2000px;
}
</style>
