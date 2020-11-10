import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class Chip extends Vue {
    private id;
    private text;
    private variant;
    private leftIcon;
    element: VComponent;
    get chipClass(): "" | " mdc-chip-shaped";
    mounted(): void;
    inputListeners(): Record<string, Function | Function[]> & {
        input: (event: any) => void;
    };
}
