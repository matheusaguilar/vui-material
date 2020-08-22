import { Vue } from "vue-property-decorator";
export default class Menu extends Vue {
    private id;
    private items;
    private element;
    clicked(index: any): void;
    open(): void;
    close(): void;
    mounted(): void;
}
