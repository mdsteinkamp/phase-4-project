class Chord < ApplicationRecord
  belongs_to :user
  belongs_to :song

  validates :name, presence: true
end
