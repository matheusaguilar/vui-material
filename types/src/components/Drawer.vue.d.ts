import { Vue } from "vue-property-decorator";
export default class Drawer extends Vue {
    private id;
    private variant;
    private items;
    private element;
    private itemsParsed;
    private variantClassesMap;
    get variantClass(): any;
    activeClass(active: boolean): "" | " mdc-list-item--activated";
    clicked(index: number): void;
    change(): void;
    open(): void;
    close(): void;
    created(): void;
    mounted(): void;
}
