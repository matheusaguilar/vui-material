import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class Select extends Vue {
    private id;
    private value;
    private variant;
    private label;
    private shaped;
    private required;
    private disabled;
    private items;
    element: VComponent;
    get variantClass(): " mdc-select--outlined" | " mdc-select--filled";
    get disabledClass(): "" | " mdc-select--disabled";
    get requiredClass(): "" | " mdc-select--required";
    selectedClassItem(selected: any): "" | " mdc-list-item--selected";
    disabledClassItem(disabled: any): "" | " mdc-list-item--disabled";
    get itemsParsed(): any[];
    onValueChanged(value: any): void;
    onChildChanged(value: any): void;
    mounted(): void;
}
