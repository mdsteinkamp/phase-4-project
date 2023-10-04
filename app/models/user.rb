class User < ApplicationRecord
  has_secure_password
  has_many :chords
  has_many :songs, through: :chords
end
