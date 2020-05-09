<template>
  <b-navbar 
    class="app-navbar"
    fixed
    toggleable="md" 
    type="dark" 
    variant="primary">
        <b-navbar-brand to="/">PostLove</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/about">О проекте</b-nav-item>       
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!isLoggedIn" to="/user/login">Войти</b-nav-item>
            <b-nav-item v-if="!isLoggedIn" to="/user/register">Регистрация</b-nav-item>
            <b-nav-item v-if="isLoggedIn" to="/user/me">Профиль</b-nav-item>
            <b-nav-item  v-if="isLoggedIn"><div @click="logout">Выйти</div></b-nav-item >
        </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'app-navbar',
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        // .then(() => {
        //   this.$router.push('/user/login')
        // })
        this.$router.push('/user/login')
      }
    },
}
</script>

<style>

</style>    