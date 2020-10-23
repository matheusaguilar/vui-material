import { Vue } from "vue-property-decorator";
export default class AutoComplete extends Vue {
    private icon;
    private noResultLabel;
    private search;
    private start;
    private autocompleteDiv;
    private autocompleteInputDiv;
    private inputElement;
    private selected;
    private searchResults;
    mounted(): void;
    /**
     * return a string based replace with b elements on selected items.
     */
    private replaceSelectedItem;
}
