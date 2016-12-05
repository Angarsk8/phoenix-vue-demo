# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :basic_app,
  ecto_repos: [BasicApp.Repo]

# Configures the endpoint
config :basic_app, BasicApp.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "GpDcyKjEDQ040Qpj/2E1QjD0EvTGVwNB0Cmmr+bDIBNvP/L1zzBs9Na09Cnpurhv",
  render_errors: [view: BasicApp.ErrorView, accepts: ~w(html json)],
  pubsub: [name: BasicApp.PubSub,
           adapter: Phoenix.PubSub.PG2]

config :guardian, Guardian,
  issuer: "BasicApp",
  ttl: { 3, :days },
  verify_issuer: true,
  allowed_algos: ["HS256"],
  secret_key: %{"k" => "5Fn8i7r5cRWZW_yyr9Flkg", "kty" => "oct"},
  serializer: BasicApp.GuardianSerializer

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
