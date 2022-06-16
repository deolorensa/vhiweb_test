<template>
<div class="dark:bg-slate-900 ">
  <div class="">
    <navbar-main class=""/>
  </div>
  <div class="container mx-auto px-20 pb-10">
    <ListMain/>
  </div>
  <!-- <div class="flex justify-center">
    <pagination-main/>
  </div> -->
</div>
</template>

<script>
// import PaginationMain from '@/components/PaginationMain.vue'
import ListMain from '../components/ListMain.vue'
import NavbarMain from '@/components/NavbarMain.vue'

export default {
  components: {
    ListMain,
    // PaginationMain,
    NavbarMain
  },
  computed: {
    
    profileList() {
      return this.$store.state.profileList
    },
    // login() {
    //   return this.$store.state.users
    // }
  },
  methods: {
    async fetchProfile() {
      await this.$store.dispatch('fetchProfile')
    },
    // async fetchLogin(params) {
    //   await this.$store.dispatch('fetchLogin', params)
    // }
  },
  mounted() {
    this.fetchProfile()
    // this.fetchLogin({
    //   email: "eve.holt@reqres.in",
    //   password: "cityslicka"
    // })
  },
}
</script>
