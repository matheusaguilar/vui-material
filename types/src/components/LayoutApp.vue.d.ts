import { Vue } from "vue-property-decorator";
import TopAppBar from "./TopAppBar.vue";
import Drawer from "./Drawer.vue";
export default class LayoutApp extends Vue {
    private id;
    private topAppMode;
    private topAppTitle;
    private drawer;
    private drawerItems;
    private drawerChange;
    private title;
    private titleHref;
    readonly drawerModal: Drawer;
    readonly drawerSide: Drawer;
    readonly topAppBar: TopAppBar;
    /**
     * reload the nav items for the drawer
     */
    loadDrawerItems(): void;
    /**
     * return the active modal.
     */
    private getDrawerActive;
    /**
     * When click on topAppBar menu, open or close modal
     */
    clickMenu(): void;
    /**
     * open the drawer modal.
     */
    openDrawer(): void;
    /**
     * close the drawer modal.
     */
    closeDrawer(): void;
}
