import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
export default class TextFieldMask extends Vue {
    private id;
    private type;
    private value;
    private variant;
    private label;
    private name;
    private shaped;
    private leftIcon;
    private rightIcon;
    private helperText;
    private required;
    private disabled;
    private pattern;
    private title;
    private maxlength;
    private mask;
    private money;
    private moneyOptions;
    private moneyUnit;
    element: VComponent;
    private textField;
    private input;
    private activeMask;
    mounted(): void;
    /**
     * emit the events of the TextField.
     */
    inputListeners(): Record<string, Function | Function[]>;
    /**
     * added to update the input value based on changes made in value prop.
     */
    private updateInputValue;
    /**
     * added to update the mask on changes made in value prop.
     */
    private updateMask;
    /**
     * update the mask value.
     */
    private updateMaskValue;
    /**
     * mask the input value.
     */
    private maskInput;
    /**
     * mask using money format.
     */
    private maskMoney;
    /**
     * mask using dynamic format.
     */
    private maskDynamic;
    /**
     * mask using simple format.
     */
    private maskSimple;
    /**
     * return the current mask for dynamic mask.
     */
    private dynamicGetMask;
    /**
     * handle the changes of the dynamic masks.
     */
    private dynamicMaskHandler;
    /**
     * validate the input.
     */
    private validateMask;
    /**
     * check if has special character.
     */
    private hasSpecialCharacter;
    /**
     * count how many special character (!= A and != 9) the mask have.
     */
    private countMaskSpecialCharacters;
}
