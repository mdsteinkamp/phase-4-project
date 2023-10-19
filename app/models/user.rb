class User < ApplicationRecord
  has_secure_password
  has_many :chords
  has_many :songs, through: :chords
  
  validates :username, uniqueness: true
  validates :username, presence: true

  def user_songs
    self.songs
  end
  
end
