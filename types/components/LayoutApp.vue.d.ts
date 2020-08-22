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
    clickMenu(): void;
    clickTitle(): void;
}
