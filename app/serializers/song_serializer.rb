class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :structure
end
