<template>
  <div
    :id="id"
    :[element.dataid]="'autocomplete-' + _uid"
    class="mdc-autocomplete"
  >
    <div class="autocomplete-input">
      <TextField
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
import { Component, Prop, Vue } from "vue-property-decorator";
import TextField from "@/components/TextField.vue";
import Autocomplete from "@trevoreyre/autocomplete-js";
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
  @Prop({ default: "search" }) private leftIcon!: string;
  @Prop({ default: "" }) private rightIcon!: string;
  @Prop({ default: "" }) private helperText!: string;
  @Prop({ default: null }) private required!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: null }) private pattern!: string;
  @Prop({ default: null }) private title!: string;
  @Prop({ default: "No results found" }) private noResultLabel!: string;

  @Prop({ default: () => () => [] }) private search!: () => string[];
  @Prop({ default: 3 }) private start!: number;

  private autocompleteDiv: any = null;
  private autocompleteInputDiv: any = null;
  private inputElement: any = null;
  private selected: any = null;
  private searchResults: any = [];

  public element = new VComponent();

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=autocomplete-${this._uid}]`
    );

    this.autocompleteDiv = this.element.dom;
    this.autocompleteInputDiv = document.querySelector(".autocomplete-input");
    this.inputElement = this.autocompleteInputDiv.querySelector("input");

    this.inputElement.addEventListener("keyup", () => {
      this.selected = null;
    });
    this.inputElement.addEventListener("focus", () => {
      this.autocompleteInputDiv.classList.add("focused");
    });
    this.inputElement.addEventListener("blur", () => {
      this.autocompleteInputDiv.classList.remove("focused");
      this.inputElement.value = this.selected;
    });

    new (Autocomplete as any)(this.autocompleteDiv, {
      autoSelect: true,
      search: (input: any) => {
        if (!this.search || input.length < this.start) {
          return [];
        }

        this.searchResults = this.search();
        return this.searchResults.filter((item: string) =>
          item.toLowerCase().includes(input.toLowerCase())
        );
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
          this.selected = result;
          this.inputElement.blur();
          this.$emit("input", this.selected);
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
   * return a string based replace with b elements on selected items.
   */
  private replaceSelectedItem(result: string, searchValue: string) {
    return result
      .toLowerCase()
      .replaceAll(
        searchValue.toLowerCase(),
        `<b>${searchValue.toLowerCase()}</b>`
      );
  }
}
</script>

<style lang="scss">
@import "@material/theme/mdc-theme";

.mdc-autocomplete {
  max-width: 400px;
  margin: 0 auto;

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
