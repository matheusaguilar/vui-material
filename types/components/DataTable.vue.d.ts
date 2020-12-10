import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class DataTable extends Vue {
    private id;
    private head;
    private data;
    element: VComponent;
    private headParsed;
    private isHeadNumber;
    private isHeadSort;
    private isDataNumber;
    getSelectedRows(): any;
    dataChange(): void;
    created(): void;
    mounted(): void;
}
