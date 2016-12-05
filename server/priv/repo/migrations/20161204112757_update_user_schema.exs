defmodule BasicApp.Repo.Migrations.UpdateUserSchema do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :name, :string, null: false
      remove :firstname
      remove :lastname
    end
  end
end
