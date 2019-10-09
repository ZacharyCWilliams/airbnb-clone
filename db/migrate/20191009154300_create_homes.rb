class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.string :location, null: false 
      t.string :title, null: false
      t.text :description
      t.integer :price, null: false
      t.integer :photo_id

      t.timestamps
    end
    add_index :homes, :title
    add_index :homes, :location
  end
end
