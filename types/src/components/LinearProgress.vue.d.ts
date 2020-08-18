import { Vue } from "vue-property-decorator";
export default class LinearProgress extends Vue {
  private id;
  private start;
  private isClosed;
  private element;
  get isClosedClass(): "" | " mdc-linear-progress--closed";
  show(): void;
  hide(): void;
  determinate(value: boolean): void;
  progress(value: number): void;
  buffer(value: number): void;
  reverse(value: boolean): void;
  mounted(): void;
}
