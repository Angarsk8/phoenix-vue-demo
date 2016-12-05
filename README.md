# Basic Authentication Example Built With Phoenix, Vue 2.0 and Vue Router 2.0

****Sorry for not having the commit history of this project, at the beginning I didn't realize that I was going to upload it to Github***

To start this application locally:

* Make sure you have installed _Elixir_, _Erlang_, _Phoenix_, _Node_ and _PostgreSQL_
* Install the Mix dependencies: `$ cd server/ && mix deps.get`
* Create, migrate and seed the development database: `$ mix ecto.setup`
* Start the Phoenix Server: `$ mix phoenix.server` or `$ iex -S mix phoenix.server`
* Install the NPM packages `$ cd ../client/  && npm install`
* Start the Express development server: `$ npm run dev`

To build the Vue.js project for production:
* In the client directory, run `$ npm run build` (this will execute the `build/build.js` script and will copy the produced files to the `server/priv/js/` and `server/priv/css/` directories)

To deploy this application on Heroku:
* Follow this [guide](http://www.phoenixframework.org/docs/heroku) in the Phoenix website.

Next Steps:
* Deployment using Docker and Docker-Compose.
