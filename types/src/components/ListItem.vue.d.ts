import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class ListItem extends Vue {
    private id;
    private text;
    private description;
    private leftIcon;
    private divider;
    private tabindex;
    private active;
    element: VComponent;
    get twoLineClass(): "" | " list--two-line-item";
    get activeClass(): "" | " mdc-list-item--activated";
    inputListeners(): Record<string, Function | Function[]> & {
        input: (event: any) => void;
    };
}
