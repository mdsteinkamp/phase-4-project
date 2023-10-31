class Chord < ApplicationRecord
  enum inversion: { root_position: 'root_position', first_inversion: 'first_inversion', second_inversion: 'second_inversion', third_inversion: 'third_inversion' } 
  belongs_to :user
  belongs_to :song

  validates :name, :notes, :inversion, presence: true
end
