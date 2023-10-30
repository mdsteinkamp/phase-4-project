class AddImageUrlToChords < ActiveRecord::Migration[6.1]
  def change
    add_column :chords, :image_url, :string
  end
end
