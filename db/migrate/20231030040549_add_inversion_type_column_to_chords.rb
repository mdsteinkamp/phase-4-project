class AddInversionTypeColumnToChords < ActiveRecord::Migration[6.1]
  def up
    add_column :chords, :inversion, :inversion_type
  end

  def down
    remove_column :chords, :inversion
    execute <<-SQL
      DROP TYPE inversion_type;
    SQL
  end
end
