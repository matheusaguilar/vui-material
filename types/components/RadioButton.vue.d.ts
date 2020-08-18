import { Vue } from "vue-property-decorator";
export default class RadioButton extends Vue {
  private id;
  private value;
  private val;
  private label;
  private element;
  get isChecked(): boolean;
  inputListeners(): Record<string, Function | Function[]> & {
    input: () => void;
  };
  mounted(): void;
}
