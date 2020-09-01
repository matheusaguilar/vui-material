import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class RadioButton extends Vue {
    private id;
    private value;
    private val;
    private label;
    element: VComponent;
    get isChecked(): boolean;
    inputListeners(): Record<string, Function | Function[]> & {
        input: () => void;
    };
    mounted(): void;
}
