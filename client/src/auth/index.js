const { SCHEME, HOSTNAME } =
  process.env.NODE_ENV === 'production'
  ? {SCHEME: 'https', HOSTNAME: window.location.hostname}
  : {SCHEME: 'http', HOSTNAME: 'localhost:4000'}

const API_URL = `${SCHEME}://${HOSTNAME}/api`
const REGISTRATION_URL = `${API_URL}/registrations/`
const SESSION_URL = `${API_URL}/sessions/`
const CURRENT_USER_URL = `${API_URL}/current_user/`

export default {
  user: {
    authenticated: !!window.localStorage.getItem('id_token')
  },

  login (context, creds, redirect) {
    context.$http.post(SESSION_URL, creds)
      .then(resp => {
        window.localStorage.setItem('id_token', resp.body.jwt)

        this.user.authenticated = true

        if (redirect) {
          context.$router.push({path: redirect})
        }
      }, resp => {
        context.error = resp.body.message
      })
  },

  currentUser (context) {
    context.$http.get(CURRENT_USER_URL, {headers: this.getAuthHeader()})
      .then(resp => {
        context.user = resp.body.user
      }, _ => {
        window.localStorage.removeItem('id_token')
        this.user.authenticated = false
        context.$router.push({
          path: '/login',
          query: {redirect: context.$route.fullPath}
        })
      })
  },

  signup (context, creds, redirect) {
    context.$http.post(REGISTRATION_URL, creds)
      .then(resp => {
        window.localStorage.setItem('id_token', resp.body.jwt)
        this.user.authenticated = true

        if (redirect) {
          context.$router.push({path: redirect})
        }
      }, resp => {
        console.log(resp.body.errors)
        context.errors = resp.body.errors
      })
  },

  logout (context, options) {
    context.$http.delete(SESSION_URL, options)
      .then(data => {
        window.localStorage.removeItem('id_token')
        this.user.authenticated = false
        context.$router.push({path: '/login'})
      }, error => {
        console.log(error.message)
      })
  },

  checkAuth () {
    const jwt = window.localStorage.getItem('id_token')
    this.user.authenticated = !!jwt
  },

  getAuthHeader () {
    return {
      'Authorization': window.localStorage.getItem('id_token')
    }
  }
}
