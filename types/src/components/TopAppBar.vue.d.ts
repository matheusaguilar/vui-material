import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class TopAppBar extends Vue {
  private id;
  private variant;
  private menu;
  private title;
  private titleHref;
  element: VComponent;
  private variantClassesMap;
  get variantClass(): any;
  clickMenu(): void;
  mounted(): void;
}
