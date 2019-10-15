class UpdateHomes < ActiveRecord::Migration[5.2]
  def change
    remove_column :homes, :location
    remove_column :homes, :photo_id
    add_column :homes, :long, :string, null: false, index: true
    add_column :homes, :lat, :string, null: false, index: true
  end
end
