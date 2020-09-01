import { Vue } from "vue-property-decorator";
export default class Modal extends Vue {
    private id;
    private title;
    private text;
    private simple;
    private labelNo;
    private labelYes;
    private element;
    private noAction;
    private yesAction;
    open(): void;
    close(): void;
    mounted(): void;
}
