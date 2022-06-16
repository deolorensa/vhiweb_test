<template>
<div class="container mx-auto xs:mx-10">
  <div class="bg-gray-300">
    <navbar-main/>
  </div>
  <div class="">
    <ListMain/>
  </div>
  <div class="flex justify-center">
    <pagination-main/>
  </div>
</div>
</template>

<script>
import PaginationMain from '@/components/PaginationMain.vue'
import ListMain from '../components/ListMain.vue'
import NavbarMain from '@/components/NavbarMain.vue'

export default {
  components: {
    ListMain,
    PaginationMain,
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
