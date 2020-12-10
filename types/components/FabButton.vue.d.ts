import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class FabButton extends Vue {
    private id;
    private type;
    private text;
    private variant;
    private mini;
    private leftIcon;
    private rightIcon;
    element: VComponent;
    private classMap;
    get buttonClass(): any;
    get miniClass(): "" | " mdc-fab--mini";
    inputListeners(): Record<string, Function | Function[]> & {
        click: (event: any) => void;
    };
    mounted(): void;
}
