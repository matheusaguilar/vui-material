import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class AutoComplete extends Vue {
    private id;
    private type;
    private value;
    private variant;
    private label;
    private name;
    private shaped;
    private leftIcon;
    private rightIcon;
    private helperText;
    private required;
    private disabled;
    private maxlength;
    private pattern;
    private title;
    private noResultLabel;
    private search;
    private start;
    private autocompleteDiv;
    private autocompleteInputDiv;
    private inputElement;
    private selected;
    private selectedValue;
    private searchResults;
    element: VComponent;
    mounted(): void;
    /**
     * emit the events of the TextField.
     */
    inputListeners(): Record<string, Function | Function[]>;
    /**
     * return a string based replace with b elements on selected items.
     */
    private replaceSelectedItem;
    /**
     * check if a value is string.
     */
    private isString;
    /**
     * uppercase all first letters from a pharase.
     */
    private upperCaseFirsts;
}
