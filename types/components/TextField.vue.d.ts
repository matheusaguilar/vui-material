import { Vue } from "vue-property-decorator";
export default class TextField extends Vue {
  private id;
  private type;
  private value;
  private variant;
  private label;
  private shaped;
  private leftIcon;
  private rightIcon;
  private helperText;
  private required;
  private disabled;
  private pattern;
  private title;
  private maxlength;
  private minlength;
  private element;
  get shapedClass(): "" | " mdc-shaped";
  get leftIconClass(): "" | " mdc-text-left-icon";
  get rightIconClass(): "" | " mdc-text-right-icon";
  get disabledClass(): "" | " mdc-text-field--disabled";
  get helperId(): string;
  inputListeners(): Record<string, Function | Function[]> & {
    input: (event: any) => void;
  };
  onValueChanged(value: string): void;
  mounted(): void;
}
