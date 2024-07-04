<template>
  <div class="p-12 text-center">
    <span class="text-3xl leading-[1.25] italic max-w-[460px] font-black"
      >NEW ARRIVALS</span
    >
  </div>
  <div class="flex gap-12 justify-center">
    <a
      class="flex flex-col max-w-[195px] gap-1"
      v-for="product in products"
      :key="product.id"
      :href="'product/' + product.id"
    >
      <div class="relative">
        <img
          class="w-[195px] h-[198px] object-cover rounded-xl shadow"
          :src="product.images[0]"
          :alt="product.title"
        />
        <span @click="(event) => $emit('addToCart', event, product)">
          <i
            class="fa-solid fa-circle-plus absolute right-2 bottom-2 fa-lg text-white hover:text-rose-500 cursor-pointer"
          ></i>
        </span>
      </div>
      <span class="truncate font-thin">{{ product.title }}</span>
      <div class="flex gap-2">
        <span class="font-medium">${{ product.price }}</span>
        <span class="font-thin rounded border border-slate-300 px-2">{{
          product.category.name
        }}</span>
      </div>
      <span
        v-if="$parent.addedToCart.has(product.id)"
        class="text-green-500 text-sm font-thin"
        >Added to cart!</span
      >
    </a>
  </div>
</template>

<script>
export default {
  name: "new-arrivals",
  props: {
    products: {
      type: Array,
      required: true,
    },
    addedToCart: {
      type: Set,
      required: true,
    },
  },
};
</script>
