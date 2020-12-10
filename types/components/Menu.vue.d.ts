import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class Menu extends Vue {
    private id;
    private items;
    element: VComponent;
    clicked(index: any): void;
    open(): void;
    close(): void;
    mounted(): void;
}
