<template>
  <div class="mdc-card-container" :id="id" :[element.dataid]="'card' + _uid">
    <!--Basic-->
    <div class="mdc-card mdc-basic-card" v-if="variant == 'basic'">
      <div
        class="mdc-card__primary-action"
        @click="$emit('click')"
        v-if="!href"
      >
        <div
          v-if="!lazy"
          class="mdc-card__media mdc-card__media--16-9"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
        <!--Lazy-->
        <div
          v-else
          class="mdc-card__media mdc-card__media--16-9"
          v-lazy:background-image="imgObj"
        ></div>
        <div class="mdc-card__primary" v-if="title || subtitle">
          <h2
            class="mdc-card__title mdc-typography mdc-typography--headline6"
            v-if="title"
          >
            {{ title }}
          </h2>
          <h3
            class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
            v-if="subtitle"
          >
            {{ subtitle }}
          </h3>
        </div>
        <div
          class="mdc-card__secondary mdc-typography mdc-typography--body2"
          v-if="description"
        >
          {{ description }}
        </div>
      </div>

      <!--A href-->
      <a :href="href" :target="hrefTarget" v-else>
        <div class="mdc-card__primary-action">
          <div
            v-if="!lazy"
            class="mdc-card__media mdc-card__media--16-9"
            :style="{ backgroundImage: 'url(' + img + ')' }"
          ></div>
          <!--Lazy-->
          <div
            v-else
            class="mdc-card__media mdc-card__media--16-9"
            v-lazy:background-image="imgObj"
          ></div>
          <div class="mdc-card__primary" v-if="title || subtitle">
            <h2
              class="mdc-card__title mdc-typography mdc-typography--headline6"
              v-if="title"
            >
              {{ title }}
            </h2>
            <h3
              class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
              v-if="subtitle"
            >
              {{ subtitle }}
            </h3>
          </div>
          <div
            class="mdc-card__secondary mdc-typography mdc-typography--body2"
            v-if="description"
          >
            {{ description }}
          </div>
        </div>
      </a>

      <div class="mdc-card__actions" v-if="action">
        <div class="mdc-card__action-buttons">
          <slot></slot>
        </div>
      </div>
    </div>

    <!--Clean-->
    <div class="mdc-card-clean" v-if="variant == 'clean'">
      <div
        class="mdc-card-clean-container"
        v-if="!href"
        @click="$emit('click')"
      >
        <div
          class="mdc-card-clean-img"
          v-if="!lazy"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
        <!--Lazy-->
        <div
          class="mdc-card-clean-img"
          v-else
          v-lazy:background-image="imgObj"
        ></div>
      </div>

      <!--A href-->
      <a :href="href" :target="hrefTarget" v-else>
        <div
          class="mdc-card-clean-img"
          v-if="!lazy"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
        <!--Lazy-->
        <div
          class="mdc-card-clean-img"
          v-else
          v-lazy:background-image="imgObj"
        ></div>
      </a>
    </div>

    <!--Text Over Media-->
    <div
      class="mdc-card mdc-basic-overmedia"
      v-if="variant == 'basic-overmedia'"
    >
      <div
        class="mdc-card__primary-action"
        @click="$emit('click')"
        v-if="!href"
      >
        <div
          v-if="!lazy"
          class="mdc-card__media mdc-card__media--16-9"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        >
          <div
            class="mdc-card__media-content mdc-overmedia-card__media-content"
          >
            <div class="mdc-card__primary mdc-overmedia-card__primary">
              <h2
                class="mdc-card__title mdc-typography mdc-typography--headline6"
                v-if="title"
              >
                {{ title }}
              </h2>
              <h3
                class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
                v-if="subtitle"
              >
                {{ subtitle }}
              </h3>
            </div>
          </div>
        </div>
        <!--Lazy-->
        <div
          v-else
          class="mdc-card__media mdc-card__media--16-9"
          v-lazy:background-image="imgObj"
        >
          <div
            class="mdc-card__media-content mdc-overmedia-card__media-content"
          >
            <div class="mdc-card__primary mdc-overmedia-card__primary">
              <h2
                class="mdc-card__title mdc-typography mdc-typography--headline6"
                v-if="title"
              >
                {{ title }}
              </h2>
              <h3
                class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
                v-if="subtitle"
              >
                {{ subtitle }}
              </h3>
            </div>
          </div>
        </div>
        <div
          class="mdc-card__secondary mdc-overmedia-card__secondary mdc-typography mdc-typography--body2"
          v-if="description"
        >
          {{ description }}
        </div>
      </div>

      <!--A href-->
      <a :href="href" :target="hrefTarget" v-else>
        <div class="mdc-card__primary-action">
          <div
            v-if="!lazy"
            class="mdc-card__media mdc-card__media--16-9"
            :style="{ backgroundImage: 'url(' + img + ')' }"
          >
            <div
              class="mdc-card__media-content mdc-overmedia-card__media-content"
            >
              <div class="mdc-card__primary mdc-overmedia-card__primary">
                <h2
                  class="mdc-card__title mdc-typography mdc-typography--headline6"
                  v-if="title"
                >
                  {{ title }}
                </h2>
                <h3
                  class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
                  v-if="subtitle"
                >
                  {{ subtitle }}
                </h3>
              </div>
            </div>
          </div>
          <!--Lazy-->
          <div
            v-else
            class="mdc-card__media mdc-card__media--16-9"
            v-lazy:background-image="imgObj"
          >
            <div
              class="mdc-card__media-content mdc-overmedia-card__media-content"
            >
              <div class="mdc-card__primary mdc-overmedia-card__primary">
                <h2
                  class="mdc-card__title mdc-typography mdc-typography--headline6"
                  v-if="title"
                >
                  {{ title }}
                </h2>
                <h3
                  class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
                  v-if="subtitle"
                >
                  {{ subtitle }}
                </h3>
              </div>
            </div>
          </div>
          <div
            class="mdc-card__secondary mdc-overmedia-card__secondary mdc-typography mdc-typography--body2"
            v-if="description"
          >
            {{ description }}
          </div>
        </div>
      </a>
      <div class="mdc-card__actions" v-if="action">
        <div class="mdc-card__action-buttons">
          <slot></slot>
        </div>
      </div>
    </div>

    <!--Header-->
    <div class="mdc-card mdc-basic-header" v-if="variant == 'basic-header'">
      <div class="mdc-card__primary">
        <h2
          class="mdc-card__title mdc-typography mdc-typography--headline6"
          v-if="title"
        >
          {{ title }}
        </h2>
        <h3
          class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
          v-if="subtitle"
        >
          {{ subtitle }}
        </h3>
      </div>
      <div
        class="mdc-card__primary-action"
        @click="$emit('click')"
        v-if="!href"
      >
        <div
          v-if="!lazy"
          class="mdc-card__media mdc-card__media--16-9"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
        <!--Lazy-->
        <div
          v-else
          class="mdc-card__media mdc-card__media--16-9"
          v-lazy:background-image="imgObj"
        ></div>
        <div
          class="mdc-card__secondary mdc-header-card__secondary mdc-typography mdc-typography--body2"
          v-if="description"
        >
          {{ description }}
        </div>
      </div>

      <!--A href-->
      <a :href="href" :target="hrefTarget" v-else>
        <div class="mdc-card__primary-action">
          <div
            v-if="!lazy"
            class="mdc-card__media mdc-card__media--16-9"
            :style="{ backgroundImage: 'url(' + img + ')' }"
          ></div>
          <!--Lazy-->
          <div
            v-else
            class="mdc-card__media mdc-card__media--16-9"
            v-lazy:background-image="imgObj"
          ></div>
          <div
            class="mdc-card__secondary mdc-header-card__secondary mdc-typography mdc-typography--body2"
            v-if="description"
          >
            {{ description }}
          </div>
        </div>
      </a>

      <div class="mdc-card__actions" v-if="action">
        <div class="mdc-card__action-buttons">
          <slot></slot>
        </div>
      </div>
    </div>

    <!--ImageText-->
    <div class="mdc-card mdc-image-text" v-if="variant == 'image-text'">
      <div
        class="mdc-card__primary-action"
        @click="$emit('click')"
        v-if="!href"
      >
        <div
          v-if="!lazy"
          class="mdc-card__media mdc-card__media--square"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
        <!--Lazy-->
        <div
          v-else
          class="mdc-card__media mdc-card__media--square"
          v-lazy:background-image="imgObj"
        ></div>
        <div class="mdc-card__primary">
          <h2
            class="mdc-card__title mdc-typography mdc-typography--headline6"
            v-if="title"
          >
            {{ title }}
          </h2>
          <h3
            class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
            v-if="subtitle"
          >
            {{ subtitle }}
          </h3>
        </div>
      </div>

      <!--A href-->
      <a :href="href" :target="hrefTarget" v-else>
        <div class="mdc-card__primary-action">
          <div
            v-if="!lazy"
            class="mdc-card__media mdc-card__media--square"
            :style="{ backgroundImage: 'url(' + img + ')' }"
          ></div>
          <!--Lazy-->
          <div
            v-else
            class="mdc-card__media mdc-card__media--square"
            v-lazy:background-image="imgObj"
          ></div>
          <div class="mdc-card__primary">
            <h2
              class="mdc-card__title mdc-typography mdc-typography--headline6"
              v-if="title"
            >
              {{ title }}
            </h2>
            <h3
              class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2"
              v-if="subtitle"
            >
              {{ subtitle }}
            </h3>
          </div>
        </div>
      </a>

      <div class="mdc-card__actions" v-if="action">
        <div class="mdc-card__action-buttons">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import { MDCRipple } from "@material/ripple";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  observer: true
});

@Component
export default class Card extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "basic" }) private variant!: string;
  @Prop({ default: false }) private lazy!: boolean;
  @Prop({ default: null }) private img!: string;
  @Prop({ default: null }) private imgLoading!: string;
  @Prop({ default: null }) private imgError!: string;
  @Prop({ default: "Title" }) private title!: string;
  @Prop({ default: "SubTitle" }) private subtitle!: string;
  @Prop({ default: "Description" }) private description!: string;
  @Prop({ default: false }) private action!: boolean;
  @Prop({ default: null }) private href!: string;
  @Prop({ default: "_self" }) private hrefTarget!: string;

  public element = new VComponent();

  get imgObj() {
    return {
      loading: this.imgLoading,
      src: this.img,
      error: this.imgError
    };
  }

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=card${this._uid}]`
    );

    const selector = ".mdc-button, .mdc-icon-button, .mdc-card__primary-action";
    const ripples = [].map.call(
      this.element.dom.querySelectorAll(selector),
      el => {
        return new MDCRipple(el);
      }
    );

    this.element.ripple = ripples;
  }
}
</script>

<style lang="scss">
@use "@material/card";
@include card.core-styles;

.mdc-card-container {
  width: 100%;
  height: 100%;

  .mdc-card__primary {
    padding: 1rem;

    .mdc-card__title {
      margin: 0;
    }

    .mdc-card__subtitle {
      margin: 0;
    }
  }

  .mdc-card__secondary {
    padding: 0 1rem 8px;
  }

  .mdc-card__secondary,
  .mdc-card__subtitle {
    color: rgba(0, 0, 0, 0.54);
    color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
  }

  a {
    text-decoration: none;
    color: black;
  }
}

//basic

//clean
.mdc-card-clean {
  width: 100%;
  height: 100%;

  .mdc-card-clean-container {
    width: 100%;
    height: 100%;
  }

  .mdc-card-clean-img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

//basic-overmedia
.mdc-basic-overmedia {
  .mdc-overmedia-card__media-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  .mdc-overmedia-card__primary {
    color: white;

    .mdc-card__subtitle {
      color: white;
    }
  }

  .mdc-overmedia-card__secondary {
    padding-top: 1rem;
  }
}

//basic-header
.mdc-basic-header {
  .mdc-header-card__secondary {
    padding-top: 1rem;
  }
}

//image-text
.mdc-image-text {
  .mdc-card__primary-action {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;

    .mdc-card__media--square {
      width: 110px;
    }
  }
}
</style>
