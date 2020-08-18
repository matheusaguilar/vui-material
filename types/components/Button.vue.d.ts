import { Vue } from "vue-property-decorator";
export default class Button extends Vue {
  private id;
  private type;
  private text;
  private variant;
  private leftIcon;
  private rightIcon;
  private disabled;
  private element;
  private classMap;
  get buttonClass(): any;
  mounted(): void;
}
