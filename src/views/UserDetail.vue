
<template>
  <div class="container mx-auto w-full flex justify-center py-20 ">
    <div class="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-900 hover:shadow-2xl transform transition duration-500 hover:scale-110 my-3">
      <img class="mx-auto py-5" :src="detail.avatar" alt="">
      <div class="px-5 py-3 text-sm font-semibold rounded-xl m-9">
      <p>id : <span class=" font-bold "> {{ detail.id }} </span> </p>
      <p>First Name : <span class=" font-bold "> {{ detail.first_name }} </span> </p>
      <p>Last Name  : <span class=" font-bold "> {{ detail.last_name }} </span> </p>
      <p>Email      : <span class=" font-bold "> {{ detail.email }} </span> </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
    profileList() {
      return this.$store.state.profileList
    },
    detail() {
      return this.profileList.find(
        (profileList) => profileList.id === this.$route.params.id
      );
    },
  },
}
</script>

<style>

</style>