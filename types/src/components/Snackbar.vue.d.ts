import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
interface Action {
    call: Function;
    label: string;
}
export default class Snackbar extends Vue {
    private id;
    element: VComponent;
    text: string;
    action: Action | undefined;
    open(text: string, action?: Action): void;
    mounted(): void;
}
export {};
