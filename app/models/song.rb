class Song < ApplicationRecord
  has_many :chords
  has_many :users, through: :chords
end
