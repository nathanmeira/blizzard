<template>
  <div class="sidebar bg-[#15141b] text-white px-4 min-w-[232px] border-r-[1px] border-[#26242F]">
    <div class="logo mt-3.5">
      <img src="@/assets/images/logos/blizzard_logo.png" alt="Blizzard Logo" class="h-10 w-20">
    </div>
    <div class="mt-5 mb-5">
      <nuxt-link to="/">
        <div class="sidebar-item h-12 flex items-center text-sm text-base-gray font-light hover:bg-blizzard-hover hover:text-blizzard-purple active:font-semibold transition-all rounded-md pl-2">
          <HomeIcon class="h-6" />
          <span class="ml-4">Home</span>
        </div>
      </nuxt-link>

      <nuxt-link to="store">
        <div class="sidebar-item h-12 flex items-center text-sm text-base-gray font-light hover:bg-blizzard-hover hover:text-blizzard-purple active:font-semibold transition-all rounded-md pl-2">
          <StoreIcon class="h-6"/>
          <span class="ml-4">Store</span>
        </div>
      </nuxt-link>

      <nuxt-link to="games-library">
        <div class="sidebar-item h-12 flex items-center text-sm text-base-gray font-light hover:bg-blizzard-hover hover:text-blizzard-purple active:font-semibold transition-all rounded-md pl-2">
          <GamesLibraryIcon class="h-6"/>
          <span class="ml-4">Games Library</span>
        </div>
      </nuxt-link>

      <nuxt-link to="community">
        <div class="sidebar-item h-12 flex items-center text-sm text-base-gray font-light hover:bg-blizzard-hover hover:text-blizzard-purple active:font-semibold transition-all rounded-md pl-2">
          <CommunityIcon class="h-6"/>
          <span class="ml-4">Community</span>
        </div>
      </nuxt-link>
    </div>

    <hr>

    <div class="mt-8 mb-5 text-sm font-light">
      <div class="mb-2 text-base-gray text-sm">YOUR GAMES</div>
      <div class="sidebar-item h-12 flex items-center hover:text-blizzard-purple active:font-semibold transition-all rounded-md cursor-pointer">
        <img src="@/assets/images/icons/wow_icon.png" alt="World of Warcraft" class="h-6 w-6">
        <span class="ml-4">World of Warcraft</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:text-blizzard-purple active:font-semibold transition-all rounded-md cursor-pointer">
        <img src="@/assets/images/icons/diablo_icon.png" alt="Diablo III" class="h-6 w-6">
        <span class="ml-4">Diablo III</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:text-blizzard-purple active:font-semibold transition-all rounded-md cursor-pointer">
        <img src="@/assets/images/icons/startcraft_icon.png" alt="Starcraft" class="h-6 w-6">
        <span class="ml-4">Starcraft II</span>
      </div>
      <div class="sidebar-item h-12 flex items-center text-base-gray hover:text-blizzard-purple transition-all rounded-md cursor-pointer">
        <ShortcutIcon class="h-6" />
        <span class="ml-4">Add shortcut</span>
      </div>
    </div>

    <hr>

    <div class="mt-5 text-sm text-base-gray font-light">
      <div class="sidebar-item h-12 flex items-center hover:text-blizzard-purple active:font-semibold transition-all rounded-md cursor-pointer">
        <SupportIcon class="h-6" />
        <span class="ml-4">Support</span>
      </div>
      <div class="sidebar-item h-12 flex items-center hover:text-blizzard-purple active:font-semibold transition-all rounded-md cursor-pointer">
        <NotesIcon class="h-6" />
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
import ShortcutIcon from "~/components/Icons/ShortcutIcon.vue";
import SupportIcon from "~/components/Icons/SupportIcon.vue";
import NotesIcon from "~/components/Icons/NotesIcon.vue";

export default {
  name: 'Sidebar',
  components: {NotesIcon, SupportIcon, ShortcutIcon, CommunityIcon, GamesLibraryIcon, StoreIcon, HomeIcon },
};

</script>

<style scoped>

  .logo {
    @apply h-20 p-4 flex items-center justify-center;
  }

  hr {
    border: none;
    height: 2px;
    background: linear-gradient(270deg, rgba(30, 29, 36, 0.00) -10.14%, #1E1D24 48.12%, rgba(30, 29, 36, 0.00) 107.6%);
  }

</style>