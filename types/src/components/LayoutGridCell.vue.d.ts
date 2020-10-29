import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class LayoutGridCell extends Vue {
  private id;
  private desktop;
  private tablet;
  private phone;
  element: VComponent;
  get classes(): string;
  mounted(): void;
}
