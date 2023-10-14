class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :structure

  has_many :chords
end
