import { Vue } from "vue-property-decorator";
export default class DataTable extends Vue {
  private id;
  private head;
  private data;
  private simple;
  private element;
  private headParsed;
  private isHeadNumber;
  private isHeadSort;
  private isDataNumber;
  getSelectedRows(): any;
  dataChange(): void;
  created(): void;
  mounted(): void;
}
