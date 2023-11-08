class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_songs
  has_many :chords
end
