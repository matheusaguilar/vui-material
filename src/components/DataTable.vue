<template>
  <div>
    <div class="mdc-data-table" :id="id" :[element.dataid]="'table' + _uid">
      <div class="mdc-data-table__table-container">
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th
                class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                role="columnheader"
                scope="col"
              >
                <div
                  class="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected"
                >
                  <input
                    type="checkbox"
                    class="mdc-checkbox__native-control"
                    aria-label="Toggle all rows"
                  />
                  <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path
                        class="mdc-checkbox__checkmark-path"
                        fill="none"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      />
                    </svg>
                    <div class="mdc-checkbox__mixedmark"></div>
                  </div>
                  <div class="mdc-checkbox__ripple"></div>
                </div>
              </th>

              <th
                v-for="(item, index) in headParsed"
                :key="index"
                :class="
                  'mdc-data-table__header-cell' +
                    isHeadNumber(item) +
                    isHeadSort(item)
                "
                role="columnheader"
                scope="col"
                aria-sort="ascending"
                :data-column-id="'table-header' + index"
              >
                <span v-if="!item.sort"> {{ item.name }}</span>

                <div class="mdc-data-table__header-cell-wrapper" v-else>
                  <div class="mdc-data-table__header-cell-label">
                    {{ item.name }}
                  </div>
                  <button
                    class="mdc-icon-button material-icons mdc-data-table__sort-icon-button"
                    :aria-label="'Sort by ' + item.name"
                    :aria-describedby="'sort-label' + item.name"
                  >
                    arrow_upward
                  </button>
                  <div
                    class="mdc-data-table__sort-status-label"
                    aria-hidden="true"
                    :id="'sort-label' + item.name"
                  ></div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody class="mdc-data-table__content">
            <tr
              class="mdc-data-table__row"
              :data-row-id="indexRow"
              v-for="(dataRow, indexRow) in data"
              :key="indexRow"
            >
              <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <div class="mdc-checkbox mdc-data-table__row-checkbox">
                  <input
                    type="checkbox"
                    class="mdc-checkbox__native-control"
                    :aria-labelledby="indexRow"
                  />
                  <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path
                        class="mdc-checkbox__checkmark-path"
                        fill="none"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      />
                    </svg>
                    <div class="mdc-checkbox__mixedmark"></div>
                  </div>
                  <div class="mdc-checkbox__ripple"></div>
                </div>
              </td>

              <th
                :class="'mdc-data-table__cell' + isDataNumber(0)"
                scope="row"
                :id="indexRow"
              >
                {{ dataRow[0] }}
              </th>
              <td
                :class="'mdc-data-table__cell' + isDataNumber(indexColumn)"
                v-for="(dataColumn, indexColumn) in dataRow.slice(1)"
                :key="indexColumn"
              >
                {{ dataColumn }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCDataTable } from "@material/data-table";

@Component
export default class DataTable extends Vue {
  @Prop() private id!: string;
  @Prop({ default: () => [] }) private head!: any[];
  @Prop({ default: () => [] }) private data!: any[];
  @Prop({ default: true }) private simple!: boolean;

  private element = new VComponent();
  private headParsed: any = [];

  private isHeadNumber(item: any) {
    return item?.number ? " mdc-data-table__header-cell--numeric" : "";
  }

  private isHeadSort(item: any) {
    return item?.sort
      ? " mdc-data-table__header-cell--with-sort mdc-data-table__header-cell--sorted"
      : "";
  }

  private isDataNumber(column: any) {
    return this.headParsed[column]?.number
      ? " mdc-data-table__cell--numeric"
      : "";
  }

  getSelectedRows() {
    return this.element.mdc.getSelectedRowIds();
  }

  @Watch("data")
  dataChange() {
    window.setTimeout(() => {
      this.element.mdc.layout();
    });
  }

  created() {
    this.headParsed = this.head?.map(head =>
      this.element.mergeAttributes(
        {
          name: "",
          number: false,
          sort: false
        },
        head
      )
    );
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=table${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = new MDCDataTable(this.element.dom);

      this.element.mdc.listen("MDCDataTable:sorted", (event: any) => {
        this.$emit("sort", {
          index: event.detail.columnIndex - 1,
          order: event.detail.sortValue
        });
      });
    }
  }
}
</script>

<style lang="scss">
@use "@material/checkbox";
@use "@material/icon-button";
@use "@material/data-table/data-table";

@include checkbox.core-styles;
@include icon-button.core-styles;
@include data-table.core-styles;
@include data-table.theme-baseline;
</style>
