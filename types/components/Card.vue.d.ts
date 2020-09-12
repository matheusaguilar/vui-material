import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class Card extends Vue {
    private id;
    private variant;
    private img;
    private title;
    private subtitle;
    private description;
    private action;
    element: VComponent;
    mounted(): void;
}
