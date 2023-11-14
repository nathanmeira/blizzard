<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex flex-col flex-grow">
      <Navbar />
      <div class="content flex-grow p-4">
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