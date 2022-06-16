<template>
  <div id="app"
    class="bg-white dark:bg-black"
    :class="dark ? 'dark' : 'light'">
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['dark'])
    }
  };
</script>

<style>
</style>
