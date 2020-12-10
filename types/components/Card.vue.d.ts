import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class Card extends Vue {
    private id;
    private variant;
    private lazy;
    private img;
    private imgLoading;
    private imgError;
    private title;
    private subtitle;
    private description;
    private action;
    element: VComponent;
    get imgObj(): {
        loading: string;
        src: string;
        error: string;
    };
    mounted(): void;
}
