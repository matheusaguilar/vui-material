import { Vue } from "vue-property-decorator";
export default class ListItem extends Vue {
  private id;
  private text;
  private description;
  private leftIcon;
  private divider;
  private tabindex;
  private active;
  private element;
  get twoLineClass(): "" | " list--two-line-item";
  get activeClass(): "" | " mdc-list-item--activated";
}
