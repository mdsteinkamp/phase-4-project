class Chord < ApplicationRecord
  belongs_to :user
  belongs_to :song

  validates :name, :notes, :inversion, presence: true
end
