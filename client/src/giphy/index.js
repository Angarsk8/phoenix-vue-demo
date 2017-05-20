const SCHEME = process.env.NODE_ENV === 'production' ? 'https' : 'http'
const API_KEY = 'dc6zaTOxFJmzC'
const API_URL = `${SCHEME}://api.giphy.com/v1/`
const PATH = 'gifs/search'

export default {
  getGifByQuery: (context, queryString, previous) => {
    const randomIndex = Math.floor((Math.random() * 20) + 1)
    const encodedQS = encodeURIComponent(queryString)
    const requestURL = `${API_URL}${PATH}?q=${encodedQS}&api_key=${API_KEY}`

    context.$http.get(requestURL)
      .then(resp => {
        try {
          context.image = resp.body.data[randomIndex].images.original.url
        } catch (e) {
          console.log(e.message)
          if (previous) {
            context.image = previous
          }
        }
      }, resp => {
        console.log(resp.body)
      })
  }
}
