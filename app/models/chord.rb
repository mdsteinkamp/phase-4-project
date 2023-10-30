class Chord < ApplicationRecord
  enum inversion_type: ["root_position", "first_inversion", "second_inversion", "third_inversion" ]
  belongs_to :user
  belongs_to :song

  validates :name, :notes, :inversion, presence: true
end
