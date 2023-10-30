class DropChordInversionEnum < ActiveRecord::Migration[6.1]
  def down
    DROP TYPE chord_inversion;
  end
end
