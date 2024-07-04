<template>
  <div class="pt-4 pb-12 text-center">
    <span class="text-3xl leading-[1.25] italic max-w-[460px] font-black"
      >SOME OF OUR CATEGORIES</span
    >
  </div>
  <div
    class="bg-gray-100 max-w-screen-xl mx-auto grid grid-cols-3 gap-4 p-8 rounded-lg shadow mb-12"
  >
    <div
      v-for="(categorie, index) in categories"
      :key="categorie.id"
      :class="[
        'relative w-full rounded-md shadow-xl overflow-hidden',
        shouldSpanTwoRows(index),
      ]"
    >
      <img
        class="w-full h-full object-cover rounded-md"
        :src="categorie.image"
        :alt="categorie.name"
      />
      <a
        :href="'/products?category=' + categorie.id"
        class="cursor-pointer absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <span
          class="text-xl leading-[1.25] italic font-black text-white underline"
          >{{ categorie.name }}</span
        >
      </a>
    </div>
  </div>
</template>

<script>
import { utils } from "@ecommerce/ecommerce-utils";

const httpClient = utils.createHttpClient("https://api.escuelajs.co/api/v1/");

export default {
  name: "categories-comp",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    httpClient.get("categories").then((response) => {
      this.categories = response.slice(0, 4);
    });
  },
  methods: {
    shouldSpanTwoRows(index) {
      if (index == 3) {
        return "row-span-1 ";
      }
      return index % 2 === 0 ? "row-span-2" : "";
    },
  },
};
</script>
