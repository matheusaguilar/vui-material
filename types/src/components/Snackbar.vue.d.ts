import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class Snackbar extends Vue {
    private id;
    private text;
    private action;
    element: VComponent;
    open(): void;
    clicked(): void;
    mounted(): void;
}
