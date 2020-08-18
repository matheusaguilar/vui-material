import { Vue } from "vue-property-decorator";
export default class TopAppBar extends Vue {
  private id;
  private variant;
  private menu;
  private title;
  private element;
  private variantClassesMap;
  get variantClass(): any;
  clickMenu(): void;
  mounted(): void;
}
