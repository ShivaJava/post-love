<template>
  <b-container class="home bg-secondary text-light text-center" fluid>
    <b-row class="home__priview align-items-center">
      <b-col>
        <h1 class="display-1">PostLove</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="css" scoped>
  .home {
    min-height: calc(100vh - 56px);
    /* background-image: url('../assets/images/map.jpg');
    background-size: cover;
    background-position: center; */
  }

  .home__priview {
    min-height: calc(100vh - 56px);
  }

  
</style>