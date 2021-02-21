import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class Drawer extends Vue {
    private id;
    private variant;
    private items;
    element: VComponent;
    private itemsParsed;
    private variantClassesMap;
    get hasHeaderSlot(): boolean;
    get variantClass(): any;
    activeClass(active: boolean): " mdc-list-item--activated" | "";
    isFunction(obj: any): boolean;
    callAction(event: any, action: any): void;
    change(): void;
    open(): void;
    close(): void;
    created(): void;
    mounted(): void;
}
