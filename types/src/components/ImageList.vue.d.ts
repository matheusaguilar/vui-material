import { Vue } from "vue-property-decorator";
import { VComponent } from "../ts/VComponent";
export default class ImageList extends Vue {
    private id;
    private variant;
    private lazy;
    private column;
    private mobileWidth;
    private mobileHeight;
    private labelOverflow;
    private action;
    private imgs;
    element: VComponent;
    private activeImage;
    mounted(): void;
    get isAction(): "" | " image-list-action";
    get isLabelOverflow(): "" | " mdc-image-list--with-text-protection";
    private isMasonry;
    private isMobile;
    get mobileStyle(): {
        width: string;
        height: string;
    };
    private mobileImgStyle;
    get standardStyle(): {
        width: string;
        margin: string;
    };
    private standardImgStyle;
    get masonryStyle(): {
        "column-count": string;
    };
    get imgsParsed(): any[];
    private imgViewChange;
    private emitClick;
}
