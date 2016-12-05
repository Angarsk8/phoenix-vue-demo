defmodule BasicApp.Repo.Migrations.AddNameToUserSchema do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :firstname, :string, null: false
      add :lastname, :string, null: false
    end
  end
end
