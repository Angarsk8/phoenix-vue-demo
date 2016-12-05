<template>
  <div class="form hello-view">
    <form class="giphy-form" @submit.prevent="searchGIF()">
      <input type="text" v-model="query" placeholder="Search all the GIFs">
      <button type="submit">Search</button>
    </form>
    <div class="horizontal">
      <div class="vertical">
        <img class="welcome-gif" :src="image"/>
      </div>
    </div>
    <p class="message home-logout-message">Already tired?
      <a href="/login" @click.prevent="logout()">Get Out!</a>
    </p>
  </div>
</template>

<script>
import auth from '../auth'
import giphy from '../giphy'

export default {

  name: 'Hello',

  data() {
    return {
      user: {},
      image: '',
      query: ''
    }
  },

  beforeCreate(){
    auth.currentUser(this)
    giphy.getGifByQuery(this, "welcome")
  },

  methods: {
    searchGIF(){
      const previousImage = this.image
      this.image = ""
      giphy.getGifByQuery(this, this.query, previousImage)
      this.query = ""
    },

    logout(){
      this.query = "bye"
      this.searchGIF()
      setTimeout(() => {
        auth.logout(this, { headers: auth.getAuthHeader() })
      }, 3000);
    }
  }
}
</script>
<style scoped>
  .hello-view {
    max-width: 500px;
    margin: 50px auto 0 auto;
  }

  .hello-view .home-logout-message {
    font-size: 15px;
  }

  .welcome-gif {
    max-height: 340px;
    max-width: 450px;
  }

  .horizontal {
    display: flex;
    justify-content: center;
    min-height: 350px;
  }

  .vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .giphy-form {
    width: 400px;
    margin: 0 auto 35px auto;
  }

  .giphy-form input {
    font-size: 17px;
    letter-spacing: 1px;
    height: 52px;
  }
</style>
