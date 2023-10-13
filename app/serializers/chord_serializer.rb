class ChordSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :inversion, :comments, :image_url, :user_id, :song_id

  belongs_to :song
  belongs_to :user
end
