class UserChordSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :inversion, :comments, :image_url, :user_id, :song_id

  belongs_to :song
end
