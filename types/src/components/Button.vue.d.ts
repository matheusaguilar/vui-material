import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class Button extends Vue {
    private id;
    private type;
    private text;
    private variant;
    private leftIcon;
    private rightIcon;
    private disabled;
    element: VComponent;
    private classMap;
    get buttonClass(): any;
    inputListeners(): Record<string, Function | Function[]> & {
        click: (event: any) => void;
    };
    mounted(): void;
}
