<template>
  <div class="navbar bg-gray-700 text-white p-4 px-10 h-20 flex items-center justify-between">
    <div class="search-bar flex gap-6">
      <SearchIcon class="h-4"/>
      <span>Search for games</span>
    </div>
    <div class="flex justify-between gap-8 items-center">
      <div>
        Friends
      </div>
      <div>
        Notifications
      </div>
      <div>
        Messages
      </div>
      <div class="flex items-center">
        <div class="w-10 h-10 bg-black rounded-full" />
        <div class="ml-4">
          Nathan#1024
          <div>Online</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "~/components/Icons/SearchIcon.vue";

export default {
  name: 'Navbar',
  components: {SearchIcon},
};

</script>
