import { Vue } from "vue-property-decorator";
export default class FabButton extends Vue {
  private id;
  private type;
  private text;
  private variant;
  private mini;
  private leftIcon;
  private rightIcon;
  private element;
  private classMap;
  get buttonClass(): any;
  get miniClass(): "" | " mdc-fab--mini";
  mounted(): void;
}
