<template>
<div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        First Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Avatar
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(profile, index) in profileList" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4"> 
                        <router-link :to="{ name: 'detail', params: { id: profile.id } }">
                        {{ profile.id }} 
                        </router-link> 
                    </td>
                    <td class="px-6 py-4">
                        <router-link :to="{ name: 'detail', params: { id: profile.id } }">
                        {{ profile.email }}
                        </router-link>
                    </td>
                    <td class="px-6 py-4">
                        <router-link :to="{ name: 'detail', params: { id: profile.id } }">
                        {{ profile.first_name }}
                        </router-link>
                    </td>
                    <td class="px-6 py-4">
                        <router-link :to="{ name: 'detail', params: { id: profile.id } }">
                        {{ profile.last_name }}
                        </router-link>
                    </td>
                    <td class="px-6 py-4">
                        <router-link :to="{ name: 'detail', params: { id: profile.id } }">
                        <img class="rounded-xl" :src="profile.avatar" alt="">
                        </router-link>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
    <!-- <div class="grid grid-cols-1 mx-auto place-items-center sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(profile, index) in profileList" :key="index" class="w-60 h-60 grid justify-items-center max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-900 hover:shadow-2xl transform transition duration-500 hover:scale-110 my-3">
            <router-link
              :to="{ name: 'detail', params: { id: profile.id } }"
              tag="button"
            >
            <img class="mx-auto py-5  " :src="profile.avatar" alt="">
            <h5 class="pl-2 pt-2 text-sm text-center font-bold tracking-tight text-gray-900 dark:text-white"> {{ profile.first_name +" "+ profile.last_name }} </h5>
            </router-link>
        </div>
    </div>
    <button @click="logoutButton">logout</button> -->
</div>
</template>
<script>
export default {
    computed: {
        profileList() {
        return this.$store.state.profileList
        }
    },
}
</script>

<style>

</style>