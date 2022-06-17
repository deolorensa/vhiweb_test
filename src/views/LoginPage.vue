<template>
  <div class="" >
    <div class="relative min-h-screen mt-20">
      <div class="w-full max-w-xl mx-auto p-5 bg-slate-100 max-w-lg overflow-hidden rounded-lg shadow-md bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-900 hover:shadow-2xl transform transition duration-500 hover:scale-110 ">
        <p class="text-4xl text-gray-700 font-black text-center my-12">LOGIN</p>
        <label for="email" class="text-sm font-medium text-gray-900 dark:text-gray-300 mb-1">Your email</label>
        <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="name@flowbite.com" required>
        <label for="password" class="text-sm font-medium text-gray-900 dark:text-gray-300 mb-1">Your password</label>
        <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        <button type="button" @click="login()" class="text-white w-full bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm p-1.5 text-center my-7">Log In</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
    async login() {
        await axios
          .post('https://reqres.in/api/login',{email: this.email, password: this.password})
          .then((response) => {
              this.alertLoginSucces()
              this.$store.commit('loginSucces', response.data.token)
              this.$router.replace({ name: "user" })
        })
          .catch((error) => {
            this.alertLoginError(error)
        })
    },
    alertLoginSucces(){
      this.$swal({
        position: 'center',
        icon: 'success',
        title: 'Log In Succes',
        showAlertLoginSucces: false,
        timer: 1500
        });
      },
    alertLoginError(){
      this.$swal({
        position: 'center',
        icon: 'error',
        title: 'Login Failed, Username or Password Wrong !!!',
        showAlertLoginError: false,
        timer: 1500
        });
      },
    }
}
</script>

<style>

</style>