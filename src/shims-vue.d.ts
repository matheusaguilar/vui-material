declare module "*.vue" {
  import Vue from "vue";

  declare module "vue/types/vue" {
    interface Vue {
      _uid: number;
    }
  }

  export default Vue;
}

declare module "@trevoreyre/autocomplete-js";
declare module "@/vendor/autocomplete/autocomplete-js/index";
declare module "vanilla-masker";
