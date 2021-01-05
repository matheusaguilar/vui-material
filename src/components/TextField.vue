<template>
  <div
    class="text-field-container"
    :id="id"
    :[element.dataid]="'textfield' + _uid"
  >
    <!--Filled-->
    <div
      :class="
        'mdc-text-field mdc-text-field--filled' +
          shapedClass +
          leftIconClass +
          rightIconClass +
          disabledClass
      "
      v-if="variant == 'filled'"
    >
      <i class="material-icons mdc-text-field__icon" v-if="leftIcon">{{
        leftIcon
      }}</i>
      <input
        :type="type"
        :id="'textfield-' + _uid"
        :name="name"
        class="mdc-text-field__input"
        :aria-controls="helperId"
        :aria-describedby="helperId"
        :maxlength="maxlength"
        :required="required ? true : false"
        :disabled="disabled"
        :pattern="pattern ? pattern : false"
        :title="title ? title : false"
        v-bind:value="value"
        v-on="inputListeners()"
      />
      <label
        class="mdc-floating-label"
        :for="'textfield-' + _uid"
        v-if="label"
        >{{ label }}</label
      >
      <i class="material-icons mdc-text-field__icon" v-if="rightIcon">{{
        rightIcon
      }}</i>
      <div class="mdc-line-ripple"></div>
    </div>

    <!--Outlined-->
    <div
      :class="
        'mdc-text-field mdc-text-field--outlined' +
          shapedClass +
          leftIconClass +
          rightIconClass +
          disabledClass
      "
      v-if="variant == 'outlined'"
    >
      <i class="material-icons mdc-text-field__icon" v-if="leftIcon">{{
        leftIcon
      }}</i>
      <input
        :type="type"
        :id="'textfield-' + _uid"
        :name="name"
        class="mdc-text-field__input"
        :aria-controls="helperId"
        :aria-describedby="helperId"
        :maxlength="maxlength"
        :required="required ? true : false"
        :disabled="disabled"
        :pattern="pattern ? pattern : false"
        :title="title ? title : false"
        v-bind:value="value"
        v-on="inputListeners()"
      />
      <i class="material-icons mdc-text-field__icon" v-if="rightIcon">{{
        rightIcon
      }}</i>
      <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch" v-if="label">
          <label :for="'textfield-' + _uid" class="mdc-floating-label">{{
            label
          }}</label>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>
    </div>

    <!--Full-Width-->
    <div
      :class="
        'mdc-text-field mdc-text-field--filled mdc-text-field--fullwidth' +
          disabledClass
      "
      v-if="variant == 'full-width'"
    >
      <span class="mdc-text-field__ripple"></span>
      <input
        :type="type"
        :id="'textfield-' + _uid"
        :name="name"
        class="mdc-text-field__input"
        :placeholder="label"
        :aria-label="label"
        :aria-controls="helperId"
        :aria-describedby="helperId"
        :maxlength="maxlength"
        :required="required ? true : false"
        :disabled="disabled"
        :pattern="pattern ? pattern : false"
        :title="title ? title : false"
        v-bind:value="value"
        v-on="inputListeners()"
      />
      <span class="mdc-line-ripple"></span>
    </div>

    <!--HelperLine-->
    <div
      class="mdc-text-field-helper-line"
      v-if="helperId || (maxlength && counter)"
    >
      <p
        class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg"
        :id="helperId"
        v-if="helperText"
      >
        {{ helperText }}
      </p>
      <div class="mdc-text-field-character-counter" v-if="maxlength && counter">
        0 / {{ maxlength }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCTextField } from "@material/textfield";
import { MDCTextFieldCharacterCounter } from "@material/textfield/character-counter";

@Component
export default class TextField extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "text" }) private type!: string;
  @Prop({ default: null }) private value!: string;
  @Prop({ default: "filled" }) private variant!: string;
  @Prop({ default: "Label" }) private label!: string;
  @Prop({ default: "" }) private name!: string;
  @Prop({ default: false }) private shaped!: boolean;
  @Prop({ default: "" }) private leftIcon!: string;
  @Prop({ default: "" }) private rightIcon!: string;
  @Prop({ default: "" }) private helperText!: string;
  @Prop({ default: null }) private required!: string;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: null }) private pattern!: string;
  @Prop({ default: null }) private title!: string;
  @Prop({ default: null }) private maxlength!: string;
  @Prop({ default: null }) private minlength!: string;
  @Prop({ default: false }) private counter!: boolean;

  public element = new VComponent();

  get shapedClass() {
    return this.shaped ? " mdc-shaped" : "";
  }

  get leftIconClass() {
    return this.leftIcon ? " mdc-text-left-icon" : "";
  }

  get rightIconClass() {
    return this.rightIcon ? " mdc-text-right-icon" : "";
  }

  get disabledClass() {
    return this.disabled ? " mdc-text-field--disabled" : "";
  }

  get helperId() {
    return this.helperText ? "helpertext-" + this._uid : "";
  }

  inputListeners() {
    return Object.assign({}, this.$listeners, {
      input: (event: any) => {
        this.$emit("input", event.target.value);
      }
    });
  }

  @Watch("value")
  onValueChanged(value: string) {
    if (this.element?.mdc?.textField) {
      this.element.mdc.textField.value = value;
    }
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=textfield${this._uid}]`
    );

    if (this.element.dom) {
      this.element.mdc = {};
      const textfield = this.element.dom.querySelector(".mdc-text-field");
      const charCounter = this.element.dom.querySelector(
        ".mdc-text-field-character-counter"
      );

      if (textfield) {
        this.element.mdc.textField = new MDCTextField(textfield);
      }

      if (charCounter) {
        this.element.mdc.charCounter = new MDCTextFieldCharacterCounter(
          charCounter
        );
      }

      if (this.minlength) {
        this.element.mdc.minlength = this.minlength;
      }
    }
  }
}
</script>

<style lang="scss">
@use "@material/floating-label/mdc-floating-label";
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";
@include textfield.core-styles;

@import "@material/theme/mdc-theme";

.text-field-container {
  min-width: 240px;

  //fix to container
  .mdc-text-field {
    width: 100%;
  }

  .mdc-text-field--outlined.mdc-text-left-icon {
    .mdc-floating-label {
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
  }

  //shaped
  .mdc-shaped {
    border-radius: 16px 16px 0 0;
  }

  .mdc-shaped.mdc-text-field--outlined {
    border-radius: unset;

    .mdc-text-field__input {
      padding-left: 32px;
      padding-right: 0;
    }

    .mdc-notched-outline__leading {
      border-radius: 28px 0 0 28px;
      width: 28px;
    }

    .mdc-notched-outline__notch {
      max-width: calc(100% - 28px * 2);
    }

    .mdc-notched-outline__trailing {
      border-radius: 0 28px 28px 0;
    }
  }

  // icon color on focus
  .mdc-text-field--focused {
    .mdc-text-field__icon {
      color: $mdc-theme-primary !important;
    }
  }

  //lefticon
  @mixin field-icon {
    position: absolute;
    bottom: 16px;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
  }

  .mdc-text-left-icon {
    .mdc-text-field__icon {
      @include field-icon;
      left: 16px;
      right: auto;
    }

    .mdc-text-field__input {
      padding-left: 32px !important;
      padding-right: 16px !important;
    }

    .mdc-floating-label {
      left: 48px;
      right: auto;
    }

    .mdc-notched-outline__notch {
      .mdc-floating-label {
        left: 36px;
        right: auto;
      }

      .mdc-floating-label--float-above {
        left: 4px !important;
      }
    }
  }

  //righticon
  .mdc-text-right-icon {
    .mdc-text-field__input {
      padding-left: 0px !important;
      padding-right: 32px !important;
    }

    .mdc-text-field__icon {
      @include field-icon;
      left: auto;
      right: 12px;
    }
  }
}
</style>
