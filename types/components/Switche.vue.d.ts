import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class Switche extends Vue {
    private id;
    private value;
    private label;
    element: VComponent;
    inputListeners(): Record<string, Function | Function[]> & {
        input: (event: any) => void;
    };
    mounted(): void;
}
