<template>
  <b-container>
    <div class="b-row">
      <b-col>
        <b-form>
          <b-form-group
                  label="email"
                  label-for="email"
                >
                  <b-form-input
                    id="email"
                    v-model="user.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>

              <b-button 
                block
                type="submit" 
                variant="primary">Сохранить</b-button>
        </b-form>
      </b-col>
    </div>
  </b-container>
</template> 

<script>
// import axios from 'axios'
export default {
  // name: 'me',
  data() {
    return {
      user: {
        email: this.$store.getters.getUser.email, 
      }
    }
  },
  // mounted() {
  //     axios.post('https://api.org.ru/api/auth/me', {user: this.$store.getters.getUser})
  //     .then((res) => {
  //       console.log(res);
        
  //     }) 
  // }
}
</script>
