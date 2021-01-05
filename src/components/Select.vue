<template>
  <div class="select-container" :id="id" :[element.dataid]="'select' + _uid">
    <input
      class="mdc-select-input-hide"
      :id="'select-hidden' + _uid"
      :required="required"
      tabindex="-1"
    />
    <div :class="'mdc-select' + variantClass + requiredClass + disabledClass">
      <div
        class="mdc-select__anchor"
        role="button"
        aria-haspopup="listbox"
        aria-expanded="false"
        :aria-labelledby="
          'select-label' + _uid + ' select-selected-text' + _uid
        "
      >
        <span class="mdc-select__ripple" v-if="variant != 'outlined'"></span>
        <span
          :id="'select-label' + _uid"
          class="mdc-floating-label"
          v-if="variant != 'outlined'"
          >{{ label }}</span
        >

        <!--Outlined-->
        <span class="mdc-notched-outline" v-if="variant == 'outlined'">
          <span class="mdc-notched-outline__leading"></span>
          <span class="mdc-notched-outline__notch">
            <span :id="'select-label' + _uid" class="mdc-floating-label">{{
              label
            }}</span>
          </span>
          <span class="mdc-notched-outline__trailing"></span>
        </span>

        <span
          :id="'select-selected-text' + _uid"
          class="mdc-select__selected-text"
        ></span>
        <span class="mdc-select__dropdown-icon">
          <svg
            class="mdc-select__dropdown-icon-graphic"
            viewBox="7 10 10 5"
            focusable="false"
          >
            <polygon
              class="mdc-select__dropdown-icon-inactive"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"
            ></polygon>
            <polygon
              class="mdc-select__dropdown-icon-active"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"
            ></polygon>
          </svg>
        </span>
        <span class="mdc-line-ripple"></span>
      </div>

      <div
        class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
      >
        <ul class="mdc-list" role="listbox" aria-label="Select listbox">
          <li
            :class="
              'mdc-list-item' +
                selectedClassItem(item.selected) +
                disabledClassItem(item.disabled)
            "
            :aria-selected="item.selected"
            :data-value="item.name"
            role="option"
            v-for="(item, index) in itemsParsed"
            :key="index"
          >
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Vue, Watch } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCSelect } from "@material/select";

@Component
export default class Select extends Vue {
  @Prop() private id!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: "filled" }) private variant!: string;
  @Prop({ default: "Label" }) private label!: string;
  @Prop({ default: false }) private shaped!: boolean;
  @Prop({ default: false }) private required!: boolean;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: () => [] }) private items!: any[];

  public element = new VComponent();

  get variantClass() {
    return this.variant == "outlined"
      ? " mdc-select--outlined"
      : " mdc-select--filled";
  }

  get disabledClass() {
    return this.disabled ? " mdc-select--disabled" : "";
  }

  get requiredClass() {
    return this.required ? " mdc-select--required" : "";
  }

  selectedClassItem(selected: any) {
    return selected ? " mdc-list-item--selected" : "";
  }

  disabledClassItem(disabled: any) {
    return disabled ? " mdc-list-item--disabled" : "";
  }

  get itemsParsed() {
    return this.items?.map(item =>
      this.element.mergeAttributes(
        {
          name: "",
          selected: false,
          disabled: false
        },
        item
      )
    );
  }

  @Watch("value")
  onValueChanged(value: any) {
    if (this.element?.mdc) {
      this.element.mdc.selectedIndex = value;
    }
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=select${this._uid}]`
    );

    if (this.element.dom) {
      const select = this.element.dom.querySelector(".mdc-select");
      const input = this.element.dom.querySelector("input");
      if (select) {
        this.element.mdc = new MDCSelect(select);

        if (this.value !== null) {
          this.element.mdc.selectedIndex = this.value;
          input.value = this.value;
        }

        this.element.mdc.listen("MDCSelect:change", (event: any) => {
          const { value, index } = event.detail;
          input.value = value;
          this.$emit("input", index);
          this.$emit("change", {
            value,
            index
          });
        });
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/list/mdc-list";
@use "@material/menu-surface/mdc-menu-surface";
@use "@material/menu/mdc-menu";
@use "@material/select";
@include select.core-styles();

.select-container {
  min-width: 240px;

  .mdc-select-input-hide {
    position: absolute;
    opacity: 0;
    width: 0px;
    height: 0px;
  }

  //fix to container
  .mdc-select {
    width: 100%;
  }
}
</style>
