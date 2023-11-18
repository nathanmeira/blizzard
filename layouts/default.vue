<template>
  <div class="flex h-screen font-poppins">
    <Sidebar />
    <div class="flex flex-col flex-grow">
      <Navbar />
      <div class="content flex-grow bg-[#15141b]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '/components/Navbar.vue';
import Sidebar from '/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
  },
};

</script>