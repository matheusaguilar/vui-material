import { Vue } from "vue-property-decorator";
export default class LayoutGridCell extends Vue {
    private id;
    private desktop;
    private tablet;
    private phone;
    private element;
    get classes(): string;
    mounted(): void;
}
