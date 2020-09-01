<template>
  <div>
    <li
      :class="'mdc-list-item' + twoLineClass + activeClass"
      :id="id"
      :tabindex="tabindex"
    >
      <span class="mdc-list-item__ripple"></span>
      <span
        class="mdc-list-item__graphic material-icons"
        aria-hidden="true"
        v-if="leftIcon"
        >{{ leftIcon }}</span
      >
      <span class="mdc-list-item__text">
        <span v-if="!description">{{ text }}</span>
        <div v-else>
          <span class="mdc-list-item__primary-text">{{ text }}</span>
          <span class="mdc-list-item__secondary-text">{{ description }}</span>
        </div>
      </span>
    </li>
    <li role="separator" class="mdc-list-divider" v-if="divider"></li>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ListItem extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "Text" }) private text!: string;
  @Prop({ default: "" }) private description!: string;
  @Prop({ default: "" }) private leftIcon!: string;
  @Prop({ default: false }) private divider!: boolean;
  @Prop({ default: "" }) private tabindex!: string;
  @Prop({ default: false }) private active!: boolean;

  public element = new VComponent();

  get twoLineClass() {
    return this.description ? " list--two-line-item" : "";
  }

  get activeClass() {
    return this.active ? " mdc-list-item--activated" : "";
  }
}
</script>

<style lang="scss">
.list--two-line-item {
  height: 72px;

  .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .mdc-list-item__text {
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
}
</style>
