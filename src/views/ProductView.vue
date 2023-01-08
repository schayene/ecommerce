<template>
  <div class="product">
    <ProductImagesCarousel :images="images" />

    <div class="product__details"></div>
  </div>
</template>

<script setup lang="ts">
import ProductImagesCarousel from "../components/product/ProductImagesCarousel.vue";
import { ImageInterface } from "@/interfaces/product";
import { reactive } from "@vue/reactivity";

const images = reactive<ImageInterface[]>([
  {
    url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    name: "img 1",
  },
  {
    url: "https://images.unsplash.com/photo-1594000311835-6d564e5a46b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80",
    name: "img 2",
  },
  {
    url: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "img 3",
  },
  {
    url: "https://images.unsplash.com/photo-1600093328589-39ed150b382b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    name: "img 4",
  },
  {
    url: "https://images.unsplash.com/photo-1552664467-e8727a018a93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "img 5",
  },
]);
</script>

<style lang="scss" scoped>
.product {
  background: #2d2e32;
  display: flex;

  &__details {
    width: 50%;
  }
}
</style>
