<template>
  <div class="mt-12">
    <span class="text-3xl leading-[1.25] italic max-w-[460px] font-black"
      >YOU MIGHT ALSO LIKE</span
    >
    <div class="grid grid-cols-6 gap-6 mt-4">
      <a
        class="flex flex-col gap-2"
        v-for="product in products"
        :key="product.id"
        :href="'product/' + product.id"
      >
        <img
          class="w-full h-[198px] object-cover rounded-xl shadow"
          :src="product.images[0]"
          :alt="product.title"
        />
        <span class="truncate font-thin">{{ product.title }}</span>
        <div class="flex gap-2">
          <span class="font-medium">${{ product.price }}</span>
          <span class="font-thin rounded border border-slate-300 px-2">{{
            product.category.name
          }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "products-comp",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
