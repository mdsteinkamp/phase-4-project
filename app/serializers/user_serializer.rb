class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_songs
  has_many :chords

  has_many :songs, serializer: UserSongSerializer

end
