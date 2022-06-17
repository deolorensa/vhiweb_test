<template>
<div class="dark:bg-slate-900 ">
  <div class="">
    <navbar-main class=""/>
  </div>
  <div class="container mx-auto px-20 pb-10">
    <ListMain/>
  </div>
  <div>
    <footer-main/>
  </div>
</div>
</template>

<script>
import ListMain from '../components/ListMain.vue'
import NavbarMain from '@/components/NavbarMain.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  components: {
    ListMain,
    NavbarMain,
    FooterMain
  },
  computed: {
    
    profileList() {
      return this.$store.state.profileList
    },
  },
  methods: {
    async fetchProfile() {
      await this.$store.dispatch('fetchProfile')
    },
  },
  mounted() {
    this.fetchProfile()
  },
}
</script>
