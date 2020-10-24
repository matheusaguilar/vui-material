<template>
  <div :id="'autocomplete-' + _uid" class="autocomplete">
    <div class="autocomplete-input">
      <TextField :leftIcon="icon" :required="required" />
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

@Component({
  components: {
    TextField
  }
})
export default class AutoComplete extends Vue {
  @Prop({ default: "search" }) private icon!: string;
  @Prop({ default: "No results found" }) private noResultLabel!: string;
  @Prop({ default: false }) private required!: boolean;
  @Prop({ default: null }) private search!: () => string[];
  @Prop({ default: 3 }) private start!: number;

  private autocompleteDiv: any = null;
  private autocompleteInputDiv: any = null;
  private inputElement: any = null;
  private selected: any = null;
  private searchResults: any = [];

  mounted() {
    this.autocompleteDiv = document.getElementById(`autocomplete-${this._uid}`);
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
        this.selected = result;
        this.inputElement.blur();
      }
    } as any);
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

.autocomplete {
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

  .no-results .autocomplete-no-result {
    display: block;
  }

  .no-results .autocomplete-input:not(.focused) ~ .autocomplete-no-result {
    display: none;
  }
}
</style>
