<template>
  <div
    :id="id"
    :[element.dataid]="'autocomplete-' + _uid"
    class="mdc-autocomplete"
  >
    <div class="autocomplete-input">
      <TextField
        :ref="'autocomplete-textfield' + _uid"
        :type="type"
        :value="value"
        :variant="variant"
        :label="label"
        :name="name"
        :shaped="shaped"
        :leftIcon="leftIcon"
        :rightIcon="rightIcon"
        :helperText="helperText"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :pattern="pattern"
        :title="title"
        v-on="inputListeners()"
      />
    </div>
    <ul class="autocomplete-result-list"></ul>
    <ul class="autocomplete-result-list autocomplete-no-result" visible="false">
      <li class="autocomplete-result">
        {{ noResultLabel }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import TextField from "@/components/TextField.vue";
// import Autocomplete from "@trevoreyre/autocomplete-js";
import Autocomplete from "@/vendor/autocomplete/autocomplete-js/index";
import { VComponent } from "@/ts/VComponent";

@Component({
  components: {
    TextField
  }
})
export default class AutoComplete extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "text" }) private type!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: "filled" }) private variant!: string;
  @Prop({ default: "Label" }) private label!: string;
  @Prop({ default: "" }) private name!: string;
  @Prop({ default: false }) private shaped!: boolean;
  @Prop({ default: "" }) private leftIcon!: string;
  @Prop({ default: "search" }) private rightIcon!: string;
  @Prop({ default: "" }) private helperText!: string;
  @Prop({ default: null }) private required!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: null }) private maxlength!: string;
  @Prop({ default: null }) private pattern!: string;
  @Prop({ default: null }) private title!: string;
  @Prop({ default: "No results found" }) private noResultLabel!: string;

  @Prop({ default: () => () => [] }) private search!: (
    inputValue: string
  ) => Promise<string[]>;
  @Prop({ default: 3 }) private start!: number;

  private autocompleteDiv: any = null;
  private autocompleteInputDiv: any = null;
  private inputElement: any = null;
  private selected: any = null;
  private selectedValue: any = "";
  private searchResults: any = [];

  public element = new VComponent();
  private textFieldMdcComponent: any = null;

  @Watch("value")
  onValueChanged(value: string) {
    this.selectedValue = value;
    if (this.selectedValue && !this.selected) {
      Promise.resolve(this.search(this.selectedValue)).then((result: any[]) => {
        this.searchResults = result;

        if (!this.isString(this.searchResults[0])) {
          this.selected = this.searchResults.find(
            (item: any) =>
              item.name?.toLowerCase() === this.selectedValue.toLowerCase()
          );
        } else {
          this.selected = this.searchResults.find(
            (item: any) =>
              item?.toLowerCase() === this.selectedValue.toLowerCase()
          );
        }

        this.$emit("selected", this.selected);
      });
    }
  }

  mounted() {
    // init elements
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=autocomplete-${this._uid}]`
    );
    this.autocompleteDiv = this.element.dom;
    this.autocompleteInputDiv = this.autocompleteDiv.querySelector(
      ".autocomplete-input"
    );
    this.inputElement = this.autocompleteInputDiv.querySelector("input");
    this.element.mdc = (this.$refs[
      `autocomplete-textfield${this._uid}`
    ] as any).element.mdc;
    this.textFieldMdcComponent = this.element.mdc.textField;

    // add focus class to the input
    this.inputElement.addEventListener("focus", () => {
      this.autocompleteInputDiv.classList.add("focused");
    });

    // in blur, update element values
    this.inputElement.addEventListener("blur", () => {
      this.autocompleteInputDiv.classList.remove("focused");

      this.textFieldMdcComponent.value = this.selectedValue;
      this.$emit("input", this.selectedValue);
      this.$emit("selected", this.selected);
    });

    // clear values when user change values
    this.inputElement.addEventListener("keydown", () => {
      this.selected = null;
      this.selectedValue = "";
    });

    new (Autocomplete as any)(this.autocompleteDiv, {
      autoSelect: true,
      search: async (input: any) => {
        if (input.length < this.start) {
          return [];
        }

        this.searchResults = await this.search(input);

        return this.searchResults?.length > 0
          ? this.selectSearchResult(input)
          : [];
      },
      onUpdate: (results: any) => {
        if (this.inputElement.value && results.length === 0) {
          this.autocompleteDiv.classList.add("no-results");
        } else {
          this.autocompleteDiv.classList.remove("no-results");
        }
      },
      renderResult: (result: any, props: any) => `
        <li ${props}>
          <div class="autocomplete-option">
            ${this.replaceSelectedItem(result, this.inputElement.value)}
          </div>
        </li>
      `,
      onSubmit: (result: any) => {
        if (result) {
          if (!this.isString(this.searchResults?.[0])) {
            this.selected = this.searchResults.filter(
              (item: any) => item.name === result
            )[0];
          } else {
            this.selected = result;
          }
          this.selectedValue = result ? result : "";
          this.inputElement.blur();
        }
      }
    } as any);
  }

  /**
   * emit the events of the TextField.
   */
  inputListeners() {
    const events = Object.assign({}, this.$listeners);
    delete events.input;
    return events;
  }

  /**
   * select the search result
   */
  private selectSearchResult(input: string) {
    // search objects array with name attribute
    if (!this.isString(this.searchResults[0])) {
      return this.searchResults
        .filter((item: any) =>
          item.name?.toLowerCase()?.includes(input.toLowerCase())
        )
        .map((item: any) => item.name);
    }

    // search string array
    return this.searchResults.filter((item: any) =>
      item?.toLowerCase()?.includes(input.toLowerCase())
    );
  }

  /**
   * return a string based replace with b elements on selected items.
   */
  private replaceSelectedItem(result: string, searchValue: string) {
    if (result && searchValue) {
      const rg = new RegExp(searchValue, "ig");
      const rgUpper = new RegExp(searchValue, "i");
      const upperCaseResult = this.upperCaseFirsts(result);
      let upperCaseReplaceResult = upperCaseResult;
      let matchArray = null;
      while ((matchArray = rg.exec(upperCaseResult)) !== null) {
        upperCaseReplaceResult = upperCaseReplaceResult.replace(
          rgUpper,
          `<b>${matchArray[0]}</b>`
        );
      }

      return upperCaseReplaceResult;
    }

    return result;
  }

  /**
   * check if a value is string.
   */
  private isString(value: any) {
    return typeof value === "string";
  }

  /**
   * uppercase all first letters from a pharase.
   */
  private upperCaseFirsts(value: string) {
    return value
      .toLowerCase()
      .split(" ")
      .map(val => val.charAt(0).toUpperCase() + val.substring(1))
      .join(" ");
  }
}
</script>

<style lang="scss">
@import "@material/theme/mdc-theme";

.mdc-autocomplete {
  .autocomplete-result-list {
    margin: 0;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 0;
    box-sizing: border-box;
    max-height: 168px;
    overflow-y: auto;
    background: #fff;
    list-style: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
    text-align: center;

    .autocomplete-result {
      cursor: default;
      padding: 12px;
    }

    .autocomplete-result:hover,
    .autocomplete-result[aria-selected="true"] {
      background-color: rgba(0, 0, 0, 0.06);
    }

    .autocomplete-option {
      b {
        color: $mdc-theme-secondary;
      }
    }
  }

  .autocomplete-no-result {
    display: none;
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 100%;
  }
}

.no-results .autocomplete-no-result {
  display: block;
}

.no-results .autocomplete-input:not(.focused) ~ .autocomplete-no-result {
  display: none;
}
</style>
