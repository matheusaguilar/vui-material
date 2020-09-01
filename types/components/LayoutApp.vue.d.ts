import { Vue } from "vue-property-decorator";
export default class LayoutApp extends Vue {
    private id;
    private topAppMode;
    private topAppTitle;
    private drawer;
    private drawerItems;
    private drawerChange;
    private title;
    readonly drawerModal: any;
    readonly drawerSide: any;
    readonly topAppBar: any;
    /**
     * return the active modal.
     */
    private getDrawerActive;
    /**
     * When click on topAppBar menu, open or close modal
     */
    clickMenu(): void;
    /**
     * emit event on drawer item clicked.
     */
    clickDrawerItem(index: any): void;
    /**
     * emit event on topAppBar title clicked.
     */
    clickTitle(): void;
    /**
     * open the drawer modal.
     */
    openDrawer(): void;
    /**
     * close the drawer modal.
     */
    closeDrawer(): void;
}
