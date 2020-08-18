<template>
  <div
    :class="'mdc-chip' + chipClass"
    :id="id"
    :[element.dataid]="'chip' + _uid"
  >
    <div class="mdc-chip__ripple"></div>
    <i
      class="material-icons mdc-chip__icon mdc-chip__icon--leading"
      v-if="leftIcon"
      >{{ leftIcon }}</i
    >
    <span class="mdc-chip__text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Chip extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "Text" }) private text!: string;
  @Prop({ default: "round" }) private variant!: string;
  @Prop({ default: "" }) private leftIcon!: string;

  private element = new VComponent();

  get chipClass() {
    return this.variant == "shaped" ? " mdc-chip-shaped" : "";
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=chip${this._uid}]`
    );
  }
}
</script>

<style lang="scss">
.mdc-chip-shaped {
  border-radius: 4px;
}
</style>
