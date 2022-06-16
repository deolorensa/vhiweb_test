
<template>
  <div class="dark:bg-slate-900 pb-96">
    <div>
      <button @click="$router.push('/user')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mt-3 ml-4 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    <div class="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 transform transition duration-500 hover:scale-110">
      <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" :src="detail.avatar" alt="Man looking at item at a store">
      </div>
      <div class="p-8">
        <div class="px-5 py-3 text-sm font-semibold dark:text-gray-400 rounded-xl  tracking-wide">
          <p>id : <span class=" font-bold "> {{ detail.id }} </span> </p>
          <p>First Name : <span class=" font-bold "> {{ detail.first_name }} </span> </p>
          <p>Last Name  : <span class=" font-bold "> {{ detail.last_name }} </span> </p>
          <p>Email      : <span class=" font-bold "> {{ detail.email }} </span> </p>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- <div class="container mx-auto w-full flex justify-center py-20 ">
    <div class="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-900 hover:shadow-2xl transform transition duration-500 hover:scale-110 my-3">
      <img class="mx-auto py-5" :src="detail.avatar" alt="">
      <div class="px-5 py-3 text-sm font-semibold rounded-xl m-9">
      <p>id : <span class=" font-bold "> {{ detail.id }} </span> </p>
      <p>First Name : <span class=" font-bold "> {{ detail.first_name }} </span> </p>
      <p>Last Name  : <span class=" font-bold "> {{ detail.last_name }} </span> </p>
      <p>Email      : <span class=" font-bold "> {{ detail.email }} </span> </p>
      </div>
    </div>
  </div> -->
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