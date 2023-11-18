<template>
  <div class="navbar text-white p-4 px-10 h-20 flex items-center justify-between">
    <div class="search-bar text-base-gray font-light flex gap-4 items-center">
      <SearchIcon class="h-6"/>
      <input type="search" placeholder="Search for games" class="bg-transparent text-base-gray text-sm border-none outline-none w-64">
    </div>

    <div class="flex justify-between gap-8 items-center text-base-gray text-sm font-light">
      <div class="vl mr-12" />
      <div class="flex items-center hover:text-blizzard-purple transition-all cursor-pointer">
        <FriendsIcon class="h-6" />
        <span class="ml-2">Friends</span>
      </div>
      <div class="flex items-center hover:text-blizzard-purple transition-all cursor-pointer">
        <NotificationsIcon class="h-6" />
        <span class="ml-2">Notifications</span>
      </div>
      <div class="flex items-center hover:text-blizzard-purple transition-all cursor-pointer">
        <MessagesIcon class="h-6" />
        <span class="ml-2">Messages</span>
      </div>
      <div class="flex items-center cursor-pointer">
        <div class="relative">
          <div class="absolute rounded-full w-3.5 h-3.5 bottom-[-4px] right-[-4px] z-10 status-color"></div>
          <img src="@/assets/images/synthr01d.png" class="w-10 h-10 rounded-full" />
        </div>
        <div class="ml-4">
          <span class="text-white">Nathan#1024</span>
          <div>Online</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "~/components/Icons/SearchIcon.vue";
import ShortcutIcon from "~/components/Icons/ShortcutIcon.vue";
import FriendsIcon from "~/components/Icons/FriendsIcon.vue";
import NotificationsIcon from "~/components/Icons/NotificationsIcon.vue";
import MessagesIcon from "~/components/Icons/MessagesIcon.vue";

export default {
  name: 'Navbar',
  components: {MessagesIcon, NotificationsIcon, FriendsIcon, ShortcutIcon, SearchIcon},
};

</script>

<style scoped>
  .navbar {
    background-color: #1a1a23;
  }

  .vl {
    width: 2px;
    height: 54px;
    background: linear-gradient(180deg, rgba(30, 29, 36, 0.00) -10.14%, #1E1D24 48.12%, rgba(30, 29, 36, 0.00) 107.6%);
  }

  .status-color {
    background: #00A66A;
    border: 2px solid #1a1a23;
  }

</style>