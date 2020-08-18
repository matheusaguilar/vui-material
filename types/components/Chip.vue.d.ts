import { Vue } from "vue-property-decorator";
export default class Chip extends Vue {
  private id;
  private text;
  private variant;
  private leftIcon;
  private element;
  get chipClass(): "" | " mdc-chip-shaped";
  mounted(): void;
}
