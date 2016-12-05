# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     BasicApp.Repo.insert!(%BasicApp.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias BasicApp.{Repo, User}

[
  %{
    name: "Andrés",
    username: "agarcia038",
    password: "12345678"
  },
  %{
    name: "Alejandro",
    username: "angarsk8",
    password: "12345678"
  },
]
|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))
