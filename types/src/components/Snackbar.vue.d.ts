import { Vue } from "vue-property-decorator";
export default class Snackbar extends Vue {
  private id;
  private text;
  private action;
  private element;
  open(): void;
  clicked(): void;
  mounted(): void;
}
