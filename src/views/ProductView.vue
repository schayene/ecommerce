<template>
  <div class="product container">
    <ProductImagesCarousel :images="product.images" />

    <div class="product__details">
      <div class="product__categories">
        <a
          v-for="(category, key) in product.categories"
          :key="key"
          href="#"
          class="product__category"
        >
          {{ category.name }}
        </a>
      </div>

      <div class="product__name">
        <h1>{{ product.name }}</h1>
        <i>{{ product.brand }}</i>
      </div>

      <div class="product__info">
        <div class="product__price">{{ productPrice }}</div>
        <div class="product__ratings">
          <svg
            v-for="star in 5"
            :key="star"
            :class="{ active: star <= product.ratings }"
            viewBox="0 0 576 512"
          >
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            />
          </svg>
        </div>
      </div>

      <div class="product__tabview"></div>

      <div class="product__options">
        <div class="product__color">
          <label for="">Color</label>
          <select name="" id="">
            <option value="" selected></option>
          </select>
        </div>
        <div class="product__quantity">
          <label for="">Quantity</label>
          <div class="input-quantity">
            <button type="button">-</button>
            <input type="text" name="" id="" value="2" />
            <button type="button">+</button>
          </div>
        </div>
        <div class="product__total-price">
          <label for="">Total price</label>
          <input type="text" name="" id="" value="R$ 840,00" readonly />
        </div>
      </div>

      <div class="product__actions">
        <button type="button">Add to my wishilist</button>
        <button type="button">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductImagesCarousel from "../components/product/ProductImagesCarousel.vue";
import { ProductInterface } from "@/interfaces/product";
import { reactive } from "@vue/reactivity";
import { computed } from "vue";

const product = reactive<ProductInterface>({
  name: "Modern Yellow Chair",
  brand: "Tinner's House",
  price: 420,
  ratings: 4,
  categories: [{ name: "Furnitures" }, { name: "Chairs" }],
  images: [
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
  ],
});

const productPrice = computed((): string => {
  return "R$ " + product.price.toFixed(2).toString().replace(".", ",");
});
</script>

<style lang="scss" scoped>
.product {
  background: var(--background);
  display: flex;

  &__details {
    width: 50%;
    padding: 3rem;
  }

  &__categories {
    .product__category + .product__category::before {
      content: ">";
      padding: 0 0.3rem;
    }

    .product__category {
      text-transform: uppercase;
      color: var(--primary-color);
      font-weight: 600;
      font-size: 0.75rem;
      margin-bottom: 0.9rem;
      display: inline-block;
    }
  }

  &__name {
    margin-bottom: 1rem;
    h1 {
      color: var(--title-color);
      text-transform: capitalize;
      margin-bottom: -0.3rem;
    }
    i {
      font-size: 0.9rem;
      text-transform: capitalize;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .product__price {
      color: var(--title-color);
      font-weight: 500;
      font-size: 1.9rem;
    }

    .product__ratings {
      display: flex;

      svg {
        width: 1.2rem;
        height: 1.2rem;
        fill: var(--text-color);

        &.active {
          fill: #eec32c;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .product {
    flex-direction: column;

    &__details {
      width: 100%;
      padding: 1.8rem 0;
    }
  }
}
</style>
