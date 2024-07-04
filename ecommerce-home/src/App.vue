<template>
  <hero-section></hero-section>
  <new-arrivals
    :products="products"
    @addToCart="handleAddToCart"
  ></new-arrivals>
  <view-all-button></view-all-button>
  <hr class="m-12" />
  <top-selling
    :products="topSellingProducts"
    @addToCart="handleAddToCart"
  ></top-selling>
  <view-all-button></view-all-button>
  <categories-comp></categories-comp>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import ViewAllButton from "./components/ViewAllButton.vue";
import CategoriesComp from "./components/CategoriesComp.vue";
import NewArrivals from "./components/NewArrivals.vue";
import TopSelling from "./components/TopSelling.vue";
import { utils } from "@ecommerce/ecommerce-utils";

const httpClient = utils.createHttpClient("https://api.escuelajs.co/api/v1/");

export default {
  name: "App",
  components: {
    HeroSection,
    ViewAllButton,
    CategoriesComp,
    TopSelling,
    NewArrivals,
  },
  data() {
    return {
      products: [],
      topSellingProducts: [],
      addedToCart: new Set(utils.cartStore.getCartIds()),
    };
  },
  mounted() {
    httpClient.get("products").then((response) => {
      this.products = response.slice(1, 7).map((product) => ({
        ...product,
        images: product.images.map((image) => image.replace(/[[\]"]/g, "")),
      }));
      this.topSellingProducts = response.slice(7, 13).map((product) => ({
        ...product,
        images: product.images.map((image) => image.replace(/[[\]"]/g, "")),
      }));
    });
  },
  methods: {
    handleAddToCart(event, product) {
      event.preventDefault();
      utils.cartStore.addItem(product);
      this.addedToCart.add(product.id);
    },
  },
};
</script>
