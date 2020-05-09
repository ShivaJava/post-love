<template>
  <b-container class="login">
    <b-row class="login__content align-items-center justify-content-center">
      <b-col 
        cols="12"
        md="6"
        lg="5"
        xl ="4">
          <b-card 
            no-body
            border-variant="primary">
            <b-card-header 
              header-bg-variant="primary"
              header-border-variant="primary">
                <h1 class="h5 text-white">Войти</h1>
            </b-card-header>
            <b-card-body>
              <b-form @submit.prevent="login">
                <b-form-group
                  label="Адрес электронной почты"
                  label-for="email"
                >
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Пароль"
                  label-for="password"
                >
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>

              <b-button 
                block
                type="submit" 
                variant="primary">Войти</b-button>
              </b-form>
            </b-card-body>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        form: {
          email : "",
          password : ""
        }
      }
    },
    methods: {
      login: function () {
        let email = this.form.email 
        let password = this.form.password
        this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
      }
    }
  }
</script>

<style lang="css" scoped>
  .login__content {
    min-height: calc(100vh - 56px);
  }  
</style>