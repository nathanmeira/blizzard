<template>
  <div class="relative">
    <img class="object-cover w-full h-full" src="@/assets/images/overwatch/overwatch_bg.png" />
    <div class="overlay h-full"></div>
    <div class="p-10 absolute top-16 z-30">
      <div class="mb-6">
        <img src="@/assets/images/logos/overwatch2_logo.png" alt="Overwatch 2 Logo" class="w-52 h-28">
      </div>
      <div class="rounded-lg border-2 border-gray-800 bg-[#32303e] bg-opacity-50 z-10 p-1">
        <div class="flex flex-col justify-between">
          <div class="mb-2">
            <img src="@/assets/images/overwatch/overwatch2_carousel_1.png" class="rounded-md w-full">
          </div>
          <div class="flex gap-2">
            <img src="@/assets/images/overwatch/overwatch2_carousel_2.png" class="rounded-md w-48 h-32">
            <img src="@/assets/images/overwatch/overwatch2_carousel_3.png" class="rounded-md w-48 h-32">
            <img src="@/assets/images/overwatch/overwatch2_carousel_4.png" class="rounded-md w-48 h-32">
            <img src="@/assets/images/overwatch/overwatch2_carousel_5.png" class="rounded-md w-48 h-32">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default{
  name: 'Store',
}

</script>

<style scoped>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), #15141b);
    z-index: 1; /* Adjust the z-index to ensure the overlay is above the image */
  }
</style>