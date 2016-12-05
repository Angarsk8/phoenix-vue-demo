<template>
  <div class="login-page">
    <div class="form">
      <p class="redirect-message" v-if="$route.query.redirect">
        You need to login first
      </p>
      <form class="login-form" @submit.prevent="login">
        <input
          type="text"
          placeholder="Enter your username"
          v-model="credentials.username"
        >
        <p class="field-message" v-if="errors.username">{{ errors.username }}</p>
        <input
          type="password"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
        <p class="field-message" v-if="errors.password">{{ errors.password }}</p>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button type="submit">Login</button>
        <p class="message">Not registered? <router-link to="signup">Create an account</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import auth from '../auth'

export default {

  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: '',
      errors: Object.assign({}, this.credentials)
    }
  },

  methods: {
    login() {

      this._validateLoginForm()

      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }

      if(this.credentials.username && this.credentials.password){
        auth.login(this, {session: credentials}, '/')
        this.errors = { username: "", password: "" }
      }
    },

    _validateLoginForm() {

      this.error = ""

      if(!this.credentials.username && !this.credentials.password){
        this.errors = {
          username: "can't be blank",
          password: "can't be blank",
        }
        return
      }

      if(!this.credentials.username){
        this.errors = {
          username: "can't be blank",
          password: ""
        }
        return
      }

      if(!this.credentials.password){
        this.errors = {
          username: "",
          password: "can't be blank"
        }
        return
      }
    }
  }
}
</script>
<style scoped>
.redirect-message {
  margin-top: 0px;
  margin-bottom: 40px;
  font-size: 17px;
  color: #4caf50;
  font-weight: bold;
  text-transform: uppercase;
}
.error-message {
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 15px;
  color: rgba(190, 64, 62, 0.65);
}
</style>
