import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class Modal extends Vue {
    private id;
    private title;
    private text;
    private simple;
    private labelNo;
    private labelYes;
    element: VComponent;
    private noAction;
    private yesAction;
    open(): void;
    close(): void;
    mounted(): void;
}
