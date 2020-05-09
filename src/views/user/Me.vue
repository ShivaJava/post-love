<template>
  <b-container>
    <div class="b-row">
      <b-col>
        <b-form>
          <b-form-group
                  label="Имя"
                  label-for="name"
                >
                  <b-form-input
                    id="name"
               
                    type="text"
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
      user: {}
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
