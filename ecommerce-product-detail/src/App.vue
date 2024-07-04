<template>
  <div class="container p-12">
    <product-comp :product="product"></product-comp>
    <products-comp :products="recomendationProducts"></products-comp>
  </div>
</template>

<script>
import { utils } from "@ecommerce/ecommerce-utils";
import ProductComp from "./components/ProductComp.vue";
import ProductsComp from "./components/ProductsComp.vue";

const httpClient = utils.createHttpClient("https://api.escuelajs.co/api/v1/");

export default {
  name: "App",
  components: {
    ProductComp,
    ProductsComp,
  },
  data() {
    return {
      recomendationProducts: [],
      product: {},
    };
  },
  async mounted() {
    const product = await this.getProduct(this.getIdFromUrl());
    this.product = {
      ...product,
      images: product.images.map((image) => image.replace(/[[\]"]/g, "")),
    };
    await this.getProducts(product.category.id);
  },
  methods: {
    async getProducts(id) {
      httpClient.get("products?categoryId=" + id).then((response) => {
        this.recomendationProducts = response.slice(7, 13).map((product) => ({
          ...product,
          images: product.images.map((image) => image.replace(/[[\]"]/g, "")),
        }));
      });
    },
    async getProduct(productId) {
      return httpClient.get("products/" + productId);
    },
    getIdFromUrl() {
      const path = window.location.pathname;
      const id = path.split("/").pop();
      return id;
    },
  },
};
</script>
