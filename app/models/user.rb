class User < ApplicationRecord
  has_many :chords
  has_many :songs, through: :chords
end
