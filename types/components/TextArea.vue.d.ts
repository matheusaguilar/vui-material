import { Vue } from "vue-property-decorator";
export default class TextArea extends Vue {
  private id;
  private value;
  private variant;
  private label;
  private required;
  private disabled;
  private pattern;
  private title;
  private maxlength;
  private minlength;
  private element;
  get variantClass(): " mdc-text-field--outlined" | " mdc-text-field--filled";
  onValueChanged(value: string): void;
  inputListeners(): Record<string, Function | Function[]> & {
    input: (event: any) => void;
  };
  mounted(): void;
}
