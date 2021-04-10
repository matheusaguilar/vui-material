<template>
  <div id="app">
    <form>
      <TextField />

      <AutoComplete
        v-model="test"
        :search="testAuto"
        :start="0"
        @selected="testSelected"
      />

      <TextField />

      <Button :disabled="!autoValue" />
    </form>

    {{ autoValue }}
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Component } from "vue-property-decorator";

import AutoComplete from "./components/AutoComplete.vue";
import Button from "./components/Button.vue";
import TextField from "./components/TextField.vue";

@Component({
  components: { TextField, AutoComplete, Button }
})
export default class PlayGround extends Vue {
  private autoValue = null;
  private test = "";

  mounted() {
    window.setTimeout(() => {
      this.test = "two";
    }, 2000);
  }

  testAuto() {
    return [
      {
        name: "one",
        category: 1,
        isSubCategory: false
      },
      {
        name: "two",
        category: 1,
        isSubCategory: false
      },
      {
        name: "three",
        category: 1,
        isSubCategory: false
      },
      {
        name: "four",
        category: 1,
        isSubCategory: false
      }
    ];
  }

  testSelected(val: any) {
    console.log("selected: ", val);
    this.autoValue = val;
  }
}
</script>

<style lang="scss"></style>
