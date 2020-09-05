import { Vue } from "vue-property-decorator";
export default class LayoutApp extends Vue {
    private id;
    private topAppMode;
    private topAppTitle;
    private drawer;
    private drawerItems;
    private drawerChange;
    private title;
    private titleHref;
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
     * open the drawer modal.
     */
    openDrawer(): void;
    /**
     * close the drawer modal.
     */
    closeDrawer(): void;
}
