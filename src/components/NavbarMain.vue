<template>
    <nav class="flex flex-wrap justify-between items-center py-3 px-3 mb-10">
        <div class="flex items-center warna flex-shrink-0 text-white ">
            <span class="font-black text-3xl font-bold text-gray-900">USERLIST APP</span>
        </div>
        <div>
            <div class="text-lg lg:flex-grow">
                <button @click="logoutButton()" class="p-1.5 rounded-lg font-semibold border bg-gray-500 text-black hover:bg-gray-900 hover:text-white">Logout</button>
            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    methods:{
        logoutButton() {
            this.$store.commit('logout')
            this.$router.replace({ name: "login" })
            this.alertLogoutSucces()
        },
        alertLogoutSucces(){
        this.$swal({
            position: 'center',
            icon: 'success',
            title: 'Berhasil Melakukan Logout !',
            showAlertLogoutSucces: false,
            timer: 1500
        });
      },
    }
}
</script>

<style>

</style>