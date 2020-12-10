<template>
  <div>
    <div class="mdc-switch" :id="id" :[element.dataid]="'switch' + _uid">
      <div class="mdc-switch__track"></div>
      <div class="mdc-switch__thumb-underlay">
        <div class="mdc-switch__thumb"></div>
        <input
          type="checkbox"
          :id="'switch' + _uid"
          class="mdc-switch__native-control"
          role="switch"
          :aria-checked="value"
          v-bind:checked="value"
          v-on="inputListeners()"
        />
      </div>
    </div>
    <label class="mdc-switch-label" :for="'switch' + _uid">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCSwitch } from "@material/switch";

@Component
export default class Switche extends Vue {
  @Prop() private id!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: "Label" }) private label!: string;

  public element = new VComponent();

  inputListeners() {
    return Object.assign({}, this.$listeners, {
      input: (event: any) => {
        this.$emit("input", event.target.checked);
      }
    });
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=switch${this._uid}]`
    );
    if (this.element.dom) {
      this.element.mdc = new MDCSwitch(this.element.dom);
    }
  }
}
</script>

<style lang="scss">
@use "@material/switch";

@include switch.core-styles;

.mdc-switch-label {
  margin-left: 4px;
}
</style>
