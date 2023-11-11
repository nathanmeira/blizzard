<template>
  <div class="sidebar bg-gray-800 text-white px-5 w-64">
    <div class="logo">Blizzard Logo</div>
    <div class="mt-5 mb-5">
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <HomeIcon class="h-4" />
        <span class="ml-4">Home</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <StoreIcon class="h-4"/>
        <span class="ml-4">Store</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <GamesLibraryIcon class="h-4"/>
        <span class="ml-4">Games Library</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <CommunityIcon class="h-4"/>
        <span class="ml-4">Community</span>
      </div>
    </div>

    <div class="mt-5">
      <div class="mb-2">Your Games</div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <span class="ml-4">World of Warcraft</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <span class="ml-4">Diablo III</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <span class="ml-4">Starcraft II</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <span class="ml-4">Add shortcut</span>
      </div>
    </div>

    <div class="mt-5">
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <span class="ml-4">Support</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:bg-indigo-900 hover:text-violet-400 transition-all rounded-md pl-2">
        <span class="ml-4">Patch Notes</span>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcon from "~/components/Icons/HomeIcon.vue";
import StoreIcon from "~/components/Icons/StoreIcon.vue";
import GamesLibraryIcon from "~/components/Icons/GamesLibraryIcon.vue";
import CommunityIcon from "~/components/Icons/CommunityIcon.vue";

export default {
  name: 'Sidebar',
  components: {CommunityIcon, GamesLibraryIcon, StoreIcon, HomeIcon },
};

</script>

<style>

  .logo {
    @apply h-20 p-4 flex items-center justify-center;
  }

</style>