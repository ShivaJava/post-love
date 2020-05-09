<template>
  <div id="app" class="app">
    <AppNavbar />
    <main class="app__main">
        <router-view/>
    </main>
    
  </div>
</template>

<script>
  import AppNavbar from './components/layout/AppNavbar'

  export default {
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function () {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch("logout")
          }
          throw err;
        });
      });
    },
    components: {
      AppNavbar
    }
  }
</script>

<style lang="scss">
  .app {
    min-height: 100vh;
    &__main {
      padding-top: 0px;
    }
  }
</style>
