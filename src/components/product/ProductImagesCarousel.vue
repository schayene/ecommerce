<template>
  <div class="product__carousel">
    <div class="carousel" id="product-carousel">
      <div v-if="props.images.length > 1" class="carousel__controls">
        <button type="button" @click="changeSlide(index - 1, 'prev')">
          <svg viewBox="0 0 320 512">
            <path
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
        <button type="button" @click="changeSlide(index + 1, 'next')">
          <svg viewBox="0 0 320 512">
            <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            />
          </svg>
        </button>
      </div>
      <div
        class="carousel__images"
        :style="{
          '--carousel-width': carouselWidth + 'px',
          '--carousel-margin-left': marginLeftCarousel + 'px',
        }"
      >
        <div
          class="carousel__image"
          v-for="(image, key) in props.images"
          :key="key"
        >
          <img :src="image.url" :alt="image.name" />
        </div>
      </div>
      <div v-if="props.images.length > 1" class="carousel__pagination">
        <span
          v-for="(image, key) in images"
          :key="key"
          :class="{ active: index === key }"
          @click="changeSlide(key)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import { ImageInterface } from "../../interfaces/product";

interface PropsInterface {
  images: ImageInterface[];
}

const props = defineProps<PropsInterface>();

const carousel = ref(
  document.querySelector("#product-carousel") as HTMLElement
);
const index = ref<number>(0);
const carouselWidth = ref<number>(0);
const marginLeftCarousel = ref<number>(0);

const changeSlide = (key: number, action?: string): void => {
  if (action === "next" || key > index.value) {
    if (key >= props.images.length) {
      marginLeftCarousel.value = 0;
      key = 0;
    } else {
      marginLeftCarousel.value -= (key - index.value) * carouselWidth.value;
    }
  } else if (action === "prev" || key < index.value) {
    if (key < 0) {
      key = props.images.length - 1;
    }
    marginLeftCarousel.value += (index.value - key) * carouselWidth.value;
  }
  index.value = key;
};

const resizeCarousel = (): void => {
  carousel.value = document.querySelector("#product-carousel") as HTMLElement;
  carouselWidth.value = carousel.value.offsetWidth as number;
};

window.addEventListener("resize", (): void => {
  resizeCarousel();
});

onMounted((): void => {
  resizeCarousel();
});
</script>

<style lang="scss" scoped>
.product__carousel {
  width: 50%;
  overflow: hidden;

  .carousel {
    position: relative;
    height: 100%;
    background: #ffffff;
    border: 1px solid #2d2e32;

    &__controls {
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: space-between;

      button {
        border: none;
        outline: none;
        background: none;
        width: 50%;
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          transition: opacity 0.2s;
          padding: 0.7rem;
          opacity: 0;
          width: 2.8rem;
          fill: #7e7e7e;
        }

        &:hover svg {
          opacity: 1;
        }

        &:first-child {
          justify-content: flex-start;
        }
        &:last-child {
          justify-content: flex-end;
        }
      }
    }
    &__images {
      height: 100%;
      display: flex;
      margin-left: var(--carousel-margin-left);
      transition: margin-left 0.3s;

      .carousel__image {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: var(--carousel-width);
          height: 100%;
        }
      }
    }
    &__pagination {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      padding: 0.8rem;

      span {
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        background: #ffffff;
        border-radius: 50%;
        transition: filter 0.2s;
        box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
        border: 1px solid #ffffff;

        &:hover {
          cursor: pointer;
          filter: brightness(0.85);
        }

        &.active {
          background: var(--primary-color);
        }
      }
    }
  }
}
</style>
