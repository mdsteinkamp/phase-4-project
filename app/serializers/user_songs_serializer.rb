class UserSongsSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :structure
  has_many :users
  has_many :chords
end
