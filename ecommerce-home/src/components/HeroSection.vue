<template>
  <div class="relative">
    <img
      class="w-[100%] max-h-[600px] object-cover"
      alt="Vue logo"
      src="../assets/hero.png"
    />
    <div
      class="absolute z-10 flex flex-col p-5 top-[12%] left-[52px] gap-6 tracking-wide"
    >
      <span class="text-5xl leading-[1.25] italic max-w-[460px] font-black"
        >FIND CLOTHES THAT MATCH YOUR STYLE</span
      >
      <span class="text-slate-700 font-thin leading-[1.75] max-w-[520px]"
        >Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.</span
      >
      <a
        href="/products"
        class="bg-neutral-900 text-white max-w-[240px] p-4 rounded-full shadow-md text-center hover:text-black hover:bg-white hover:transition-all hover:duration-500 hover:ease-in-out"
      >
        <span>Shop Now</span>
      </a>
      <div class="flex gap-12 pt-6">
        <div class="flex flex-col gap-2">
          <span class="text-3xl leading-[1.25] max-w-[460px] font-black"
            >200+</span
          >
          <span class="text-slate-700 font-thin leading-[1.75] max-w-[520px]"
            >International Brands</span
          >
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-3xl leading-[1.25] max-w-[460px] font-black"
            >2,000+</span
          >
          <span class="text-slate-700 font-thin leading-[1.75] max-w-[520px]"
            >High-Quality Products</span
          >
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-3xl leading-[1.25] max-w-[460px] font-black"
            >30,000+</span
          >
          <span class="text-slate-700 font-thin leading-[1.75] max-w-[520px]"
            >Happy Customers</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-section",
};
</script>
