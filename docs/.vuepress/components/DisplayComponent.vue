<template>
  <div class="display-component" v-bind:style="{ marginBottom: mBottom }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DisplayComponent extends Vue {
  @Prop({ default: '20px' }) mBottom!: string;
}
</script>

<style>
.display-component {
  padding: 16px;
  box-sizing: border-box;
}

.display-component .mdc-text-field {
  margin-bottom: 20px;
}
</style>