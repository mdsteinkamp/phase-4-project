class CreateChords < ActiveRecord::Migration[6.1]
  def change
    create_table :chords do |t|
      t.string :name
      t.string :notes
      t.string :inversion
      t.text :comments
      t.string :image_url
      t.integer :user_id
      t.integer :song_id

      t.timestamps
    end
  end
end
