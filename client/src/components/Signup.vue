<template>
  <div class="login-page">
    <div class="form">
      <form class="register-form" @submit.prevent="signup()">
      <input
        type="text"
        placeholder="Enter your full name"
        v-model="credentials.name"
      />
      <p class="field-message" v-if="errors.name">{{ errors.name }}</p>
      <input
        type="text"
        placeholder="Enter your username"
        v-model="credentials.username"
      />
      <p class="field-message" v-if="errors.username">{{ errors.username }}</p>
      <input
        type="password"
        placeholder="Enter your password"
        v-model="credentials.password"
      />
      <p class="field-message" v-if="errors.password">{{ errors.password }}</p>
      <button type="submit">Signup</button>
      <p class="message">
        Already registered? <router-link to="login">Login</router-link>
      </p>
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
        name: '',
        username: '',
        password: ''
      },
      errors: Object.assign({}, this.credentials)
    }
  },

  methods: {
    signup() {
      auth.signup(this, {user: this.credentials}, '/')
    }
  }
}
</script>
