defmodule BasicApp.CurrentUserView do
  use BasicApp.Web, :view

  def render("show.json", %{user: user}) do
    %{
      user: user
    }
  end

  def render("error.json", _) do
  end
end
