<template>
  <div id="app" class="app mdc-theme--background">
    <LayoutApp
      ref="layoutApp"
      id="layoutApp"
      top-app-mode="standard"
      titleHref="/"
      :drawer="true"
      :drawerItems="drawerItems"
    >
      <template v-slot:drawer-header>
        <h3 class="mdc-drawer__title">Mail</h3>
        <h6 class="mdc-drawer__subtitle">email@material.io</h6>
      </template>

      <!-- <template v-slot:drawer-body>
        <List id="listitems">
          <ListItem
            :id="'listitem-' + index"
            v-for="(item, index) in 8"
            :key="index"
            :text="'Item ' + index"
            :tabindex="index"
          />
        </List>
      </template> -->

      <template v-slot:topappbar>
        <button
          class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
          aria-label="Favorite"
        >
          favorite
        </button>
        <button
          class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
          aria-label="Search"
        >
          search
        </button>
        <button
          class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
          aria-label="Options"
        >
          more_vert
        </button>
      </template>

      <template v-slot:content>
        <div class="layout-content mdc-theme--background">
          <div class="tee"></div>
        </div>
      </template>
    </LayoutApp>
  </div>
</template>

<script lang="ts">
import { Ref, Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

import LayoutApp from "./components/LayoutApp.vue";
import List from "./components/List.vue";
import ListItem from "./components/ListItem.vue";

@Component({
  components: { LayoutApp, List, ListItem }
})
export default class AppLayout extends Vue {
  @Ref("layoutApp") readonly layoutApp!: LayoutApp;

  private drawerItems = [
    { name: "Item 1", active: true, href: "/1", icon: "star" },
    { name: "Item 2", active: false, href: "/2", icon: "email" },
    { name: "Item 3", active: false, href: "/3", icon: "favorite" },
    { name: "Item 4", active: false, href: "/4", icon: "house" },
    {
      name: "Sair",
      active: false,
      href: () => {
        console.log("hmmm");
      },
      icon: "house"
    }
  ];

  created() {
    // for (let i = 0; i < 10; i++) {
    //   this.drawerItems.push({
    //     name: `Item ${i + 4}`,
    //     active: false,
    //     href: "#",
    //     icon: "star"
    //   });
    // }
  }

  mounted() {
    window.setTimeout(() => {
      (this.drawerItems[0] as any).notification = true;
      // console.log(this.drawerItems);
      this.layoutApp.loadDrawerItems();
    }, 2000);
  }
}
</script>

<style lang="scss">
@import "@material/theme/mdc-theme";

body {
  display: flex;
  height: 100vh;
  padding: 0px;
  margin: 0px;
}

.app {
  width: 100%;
  height: 100%;
}

.layout-content {
  width: 100%;
  height: 100%;
}

.tee {
  width: 100px;
  height: 2000px;
  background-color: gray;
}
</style>
