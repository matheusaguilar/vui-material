import { Vue } from "vue-property-decorator";
export default class AutoComplete extends Vue {
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
  private noResultLabel;
  private search;
  private start;
  private autocompleteDiv;
  private autocompleteInputDiv;
  private inputElement;
  private selected;
  private searchResults;
  mounted(): void;
  /**
   * emit the events of the TextField.
   */
  inputListeners(): Record<string, Function | Function[]>;
  /**
   * return a string based replace with b elements on selected items.
   */
  private replaceSelectedItem;
}
