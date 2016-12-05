defmodule BasicApp.Session do
  alias BasicApp.{Repo, User}

  def authenticate(%{"username" => username, "password" => password}) do
    user = Repo.get_by(User, username: String.downcase(username))

    case check_password(user, password) do
      true -> {:ok, user}
      _ -> :error
    end
  end

  defp check_password(user, password) do
    case user do
      nil -> false
      _ -> Comeonin.Bcrypt.checkpw(password, user.encrypted_password)
    end
  end
end
