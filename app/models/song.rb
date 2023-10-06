class Song < ApplicationRecord
  has_many :chords, dependent: :destroy
  has_many :users, through: :chords

  validates :title, presence: true
end
