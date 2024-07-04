<template>
  <div class="flex flex-nowrap space-x-6">
    <div class="w-full space-y-3 lg:w-1/6 mb-6">
      <div
        class="space-y-3"
        v-for="(image, index) in product.images"
        :key="index"
      >
        <img
          :src="image"
          alt="Thumbnail"
          :class="{
            'border-black': isSelected(image),
          }"
          class="w-full h-full rounded-xl border cursor-pointer"
          @click="updateMainImage(image)"
        />
      </div>
    </div>
    <div class="w-full lg:w-1/2 mb-6">
      <img
        :src="mainImage"
        alt="One Life Graphic T-Shirt"
        class="w-full h-full rounded-xl border"
      />
    </div>
    <div class="w-full lg:w-1/2">
      <h1 class="text-3xl font-bold mb-4 italic uppercase">
        {{ product.title }}
      </h1>
      <div class="mb-6">
        <span class="text-2xl font-bold text-gray-900"
          >${{ product.price }}</span
        >
      </div>
      <p class="text-gray-700 mb-6">
        {{ product.description }}
      </p>
      <div class="flex items-center gap-4">
        <div class="flex bg-gray-50 gap-2 py-3 border rounded-full">
          <span class="ml-3 cursor-pointer px-4" @click="decrementItem">-</span>
          <span class="text-slate-700">{{ item.quantity }}</span>
          <span class="mr-3 cursor-pointer px-4" @click="incrementItem">+</span>
        </div>
        <button
          @click="addToCart(product, item.quantity)"
          class="bg-neutral-900 text-white px-8 py-3 rounded-full shadow-md text-center hover:text-black hover:bg-white hover:transition-all hover:duration-500 hover:ease-in-out"
        >
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { utils } from "@ecommerce/ecommerce-utils";

export default {
  name: "product-comp",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mainImage: "",
      item: {
        quantity: 1,
      },
    };
  },
  watch: {
    product: {
      immediate: true,
      handler(product) {
        if (product.images) {
          this.mainImage = product.images[0];
        }
      },
    },
  },
  methods: {
    updateMainImage(url) {
      this.mainImage = url;
    },
    isSelected(url) {
      return this.mainImage === url;
    },
    incrementItem() {
      this.item.quantity++;
    },
    decrementItem() {
      if (this.item.quantity > 1) {
        this.item.quantity--;
      }
    },
    addToCart(item, quantity) {
      const newCart = utils.cartStore.getCart() || [];

      const existingItem = newCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        newCart.push({ ...item, quantity });
      }

      utils.localStorage.add("cart", JSON.stringify(newCart));

      window.location.href = "/products";
    },
  },
};
</script>
