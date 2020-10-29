<template>
  <div
    :id="id"
    :[element.dataid]="'imagelist' + _uid"
    class="vui-material-image-list-component"
  >
    <div>
      <!--Mobile-->
      <div class="image-list-scrolling-wrapper" v-if="isMobile()">
        <div class="image-list-img-count">
          <span> {{ activeImage }} / {{ imgsParsed.length }}</span>
        </div>
        <div
          v-if="!lazy"
          class="image-list-img-container"
          @scroll="imgViewChange($event.target)"
        >
          <div
            class="image-list-img-container-content"
            v-bind:style="mobileStyle"
            v-for="(img, index) in imgsParsed"
            :key="index"
            @click="emitClick(img, index)"
          >
            <div class="img-list-img" v-bind:style="mobileImgStyle(img)"></div>
            <div class="image-list-support" v-if="img.label">
              <span class="mdc-image-list__label">{{ img.label }}</span>
            </div>
          </div>
        </div>
        <!--Lazy-->
        <div v-else>
          <div
            class="image-list-img-container"
            @scroll="imgViewChange($event.target)"
          >
            <div
              class="image-list-img-container-content"
              v-bind:style="mobileStyle"
              v-for="(img, index) in imgsParsed"
              :key="index"
              @click="emitClick(img, index)"
            >
              <div class="img-list-img" v-lazy:background-image="img.src"></div>
              <div class="image-list-support" v-if="img.label">
                <span class="mdc-image-list__label">{{ img.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Masonry-->
      <div v-else-if="isMasonry()">
        <ul
          v-if="!lazy"
          :class="
            'mdc-image-list mdc-image-list--masonry vui-material-masonry-image-list' +
              isLabelOverflow
          "
          v-bind:style="masonryStyle"
        >
          <li
            :class="'mdc-image-list__item' + isAction"
            v-for="(img, index) in imgsParsed"
            :key="index"
            @click="emitClick(img, index)"
          >
            <img class="mdc-image-list__image" :src="img.src" />
            <div class="mdc-image-list__supporting" v-if="img.label">
              <span class="mdc-image-list__label">{{ img.label }}</span>
            </div>
          </li>
        </ul>
        <!--Lazy-->
        <ul
          v-else
          v-lazy-container="{ selector: 'img' }"
          :class="
            'mdc-image-list mdc-image-list--masonry vui-material-masonry-image-list' +
              isLabelOverflow
          "
          v-bind:style="masonryStyle"
        >
          <li
            :class="'mdc-image-list__item' + isAction"
            v-for="(img, index) in imgsParsed"
            :key="index"
            @click="emitClick(img, index)"
          >
            <img class="mdc-image-list__image" :data-src="img.src" />
            <div class="mdc-image-list__supporting" v-if="img.label">
              <span class="mdc-image-list__label">{{ img.label }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!--Standard-->
      <div v-else>
        <ul
          v-if="!lazy"
          :class="'mdc-image-list vui-material-image-list' + isLabelOverflow"
        >
          <li
            :class="'mdc-image-list__item' + isAction"
            v-bind:style="standardStyle"
            v-for="(img, index) in imgsParsed"
            :key="index"
            @click="emitClick(img, index)"
          >
            <div class="mdc-image-list__image-aspect-container">
              <div
                class="mdc-image-list__image"
                v-bind:style="standardImgStyle(img)"
              ></div>
            </div>
            <div class="mdc-image-list__supporting" v-if="img.label">
              <span class="mdc-image-list__label">{{ img.label }}</span>
            </div>
          </li>
        </ul>
        <!--Lazy-->
        <ul
          v-else
          :class="'mdc-image-list vui-material-image-list' + isLabelOverflow"
        >
          <li
            :class="'mdc-image-list__item' + isAction"
            v-bind:style="standardStyle"
            v-for="(img, index) in imgsParsed"
            :key="index"
            @click="emitClick(img, index)"
          >
            <div class="mdc-image-list__image-aspect-container">
              <div
                class="mdc-image-list__image"
                v-lazy:background-image="img.src"
              ></div>
            </div>
            <div class="mdc-image-list__supporting" v-if="img.label">
              <span class="mdc-image-list__label">{{ img.label }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { VComponent } from "@/ts/VComponent";
import { Component, Prop } from "vue-property-decorator";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  observer: true
});

@Component
export default class ImageList extends Vue {
  @Prop() private id!: string;
  @Prop({ default: "standard" }) private variant!: string;
  @Prop({ default: false }) private lazy!: boolean;
  @Prop({ default: 4 }) private column!: string;
  @Prop({ default: 300 }) private mobileWidth!: string;
  @Prop({ default: 200 }) private mobileHeight!: string;
  @Prop({ default: true }) private labelOverflow!: boolean;
  @Prop({ default: true }) private action!: boolean;
  @Prop({ default: () => [] }) private imgs!: string[];

  public element = new VComponent();
  private activeImage = 1;

  mounted() {
    this.element.dom = document.querySelector(
      `div[${this.element.dataid}=imagelist${this._uid}]`
    );

    if (this.isMobile()) {
      this.imgViewChange(
        this.element.dom.querySelector(".image-list-img-container")
      );
    }
  }

  get isAction() {
    return this.action ? " image-list-action" : "";
  }

  get isLabelOverflow() {
    return this.labelOverflow ? " mdc-image-list--with-text-protection" : "";
  }

  private isMasonry() {
    return this.variant === "masonry";
  }

  private isMobile() {
    return this.variant === "mobile";
  }

  get mobileStyle() {
    return {
      width: `${this.mobileWidth}px`,
      height: `${this.mobileHeight}px`
    };
  }

  private mobileImgStyle(img: any) {
    return {
      "background-image": `url(${img.src})`
    };
  }

  get standardStyle() {
    return {
      width: `calc(100% / ${this.column} - 4px - 1px / ${this.column})`,
      margin: "2px"
    };
  }

  private standardImgStyle(img: any) {
    return {
      "background-image": `url(${img.src})`
    };
  }

  get masonryStyle() {
    return { "column-count": this.column };
  }

  get imgsParsed() {
    return this.imgs?.map(img =>
      this.element.mergeAttributes(
        {
          label: null
        },
        img,
        "src"
      )
    );
  }

  private imgViewChange(element: any) {
    const initialImg = Math.round(
      element.clientWidth / Number(this.mobileWidth)
    );
    const scrollPosition = Math.round(
      (element.clientWidth + element.scrollLeft) / Number(this.mobileWidth)
    );
    this.activeImage =
      scrollPosition < initialImg ? initialImg : scrollPosition;

    if (this.activeImage > this.imgsParsed.length) {
      this.activeImage = this.imgsParsed.length;
    }
  }

  private emitClick(img: any, index: number) {
    if (this.action) {
      this.$emit("click", { ...img, index });
    }
  }
}
</script>

<style lang="scss">
@use "@material/image-list/mdc-image-list";

@use "@material/image-list";

.vui-material-image-list-component {
  .vui-material-image-list {
    @include image-list.standard-columns(4);
  }

  .vui-material-masonry-image-list {
    @include image-list.masonry-columns(4);
  }

  .image-list-scrolling-wrapper {
    position: relative;

    .image-list-img-count {
      display: flex;
      position: absolute;
      width: 52px;
      height: 36px;
      background-color: rgba(0, 0, 0, 0.75);
      right: 0;
      z-index: 1;
      align-items: center;
      justify-content: center;
      border-radius: 4px;

      span {
        color: white;
        font-weight: bold;
      }
    }

    .image-list-img-container {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      background-color: black;

      &-content {
        position: relative;
        flex: 0 0 auto;
        box-sizing: border-box;

        .img-list-img {
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .image-list-support {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 48px;
          padding: 0 16px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
        }
      }
    }
  }

  .image-list-action {
    cursor: pointer;
  }
}
</style>
