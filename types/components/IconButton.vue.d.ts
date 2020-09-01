import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class IconButton extends Vue {
    private id;
    private icon;
    private iconOn;
    element: VComponent;
    private on;
    changeOn(): void;
    mounted(): void;
}
