class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true
  has_many :chords
  has_many :songs, through: :chords
end
