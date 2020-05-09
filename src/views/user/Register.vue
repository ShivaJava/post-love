<template>
  <b-container class="register">
    <b-row class="register__content align-items-center justify-content-center">
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
                <h1 class="h5 text-white">Регистрация</h1>
            </b-card-header>
            <b-card-body>
              <b-form @submit.prevent="register">
                <b-form-group
                  label="Ф.И.О."
                  label-for="name"
                >
                  <b-form-input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
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

                <b-form-group
                  label="Подтверждение пароля"
                  label-for="password-confirm"
                >
                  <b-form-input
                    id="password-confirm"
                    v-model="form.password_confirm"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>

              <b-button 
                block
                type="submit" 
                variant="primary">Зарегистрироваться</b-button>
              </b-form> 
            </b-card-body>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'register',
    data(){
      return {
        form: {
          name: '',
          email : '',
          password : '',
          password_confirm : '',
        }
      }
    },
    methods: {
      register: function () {
        let data = {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        }
        this.$store.dispatch('register', data)
        .then(() => this.$router.push('/user/me'))
        .catch(err => console.log(err))
      }
    }
  }
</script>

<style lang="css" scoped>
  .register__content {
    min-height: calc(100vh - 56px);
  }  
</style>