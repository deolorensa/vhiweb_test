<template>
  <nav class="bg-white dark:bg-slate-900 border-gray-200 dark:border-black px-2 sm:px-4 py-2.5 mb-8 border shadow-lg shadow-gray-200 dark:shadow-black">
    <div class="container flex flex-wrap justify-between items-center mx-auto px-20 py-1 ">
      <button class="self-center text-xl font-black whitespace-nowrap text-black dark:text-white lg:text-3xl">User List App</button>
        <div class="flex md:order-2">
            <button class="px-3" @click="toggleDarkMode">
              <svg
                v-if="dark"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button @click="logout()" class="p-1.5 rounded-lg font-semibold border border-2 bg-gray-300 text-black hover:bg-gray-400 hover:text-white dark:hover:bg-slate-800 dark:bg-slate-700 dark:text-white">Logout</button>
        </div>
    </div>
  </nav>
</template>

<script>
 import { mapGetters, mapMutations } from 'vuex';

export default {
    mounted() {
      if (localStorage.theme === undefined) {
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)')
            .matches
        ) {
          localStorage.theme = 'dark';
          this.SET_DARK(true);
        } else {
          localStorage.theme = 'light';
        }
      } else {
        this.SET_DARK(localStorage.theme === 'dark');
      }
    },
    methods:{
        ...mapMutations(['SET_DARK']),
        toggleDarkMode() {
        this.SET_DARK(!this.dark);
        },
        logout() {
          this.$swal({
            title: 'Logout ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#757575',
            confirmButtonText: 'Logout',
            cancelButtonText: 'cancel',
            closeOnConfirm: true,
            closeOnCancel: true
            }).then((result) => { 
                if (result.value === true ) { 
                  this.$store.commit('logout')
                  this.$router.replace({ name: "login" })
                } 
            }) 
          },
    },
    computed: {
      ...mapGetters(['dark'])
    },
}
</script>

<style>

</style>