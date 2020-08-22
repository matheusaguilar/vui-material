import { Vue } from "vue-property-decorator";
export default class Select extends Vue {
    private id;
    private value;
    private variant;
    private label;
    private shaped;
    private required;
    private items;
    private element;
    private itemsParsed;
    get variantClass(): " mdc-select--outlined" | " mdc-select--filled";
    get requiredClass(): "" | " mdc-select--required";
    selectedClass(selected: any): "" | " mdc-list-item--selected";
    disabledClass(disabled: any): "" | " mdc-list-item--disabled";
    created(): void;
    mounted(): void;
}