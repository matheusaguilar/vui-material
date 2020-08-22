import { Vue } from "vue-property-decorator";
export default class IconButton extends Vue {
    private id;
    private value;
    private label;
    private element;
    inputListeners(): Record<string, Function | Function[]> & {
        input: (event: any) => void;
    };
    mounted(): void;
}
