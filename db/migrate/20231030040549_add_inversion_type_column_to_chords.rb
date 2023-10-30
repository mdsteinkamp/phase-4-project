class AddInversionTypeColumnToChords < ActiveRecord::Migration[6.1]
  def up
    add_column :chords, :inversion, :inversion_type
  end

  def down
    remove_column :chords, :inversion_type
    execute <<-SQL
      DROP TYPE inversion;
    SQL
  end
end
