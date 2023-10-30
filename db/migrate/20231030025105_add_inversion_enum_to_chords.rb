class AddInversionEnumToChords < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE TYPE chord_inversion AS ENUM ('root', 'first', 'second', 'third');
    SQL
    add_column :chords, :inversion, :chord_inversion
  end

  def down
    remove_column :chords, :chord_inversion
    execute <<-SQL
      DROP TYPE inversion;
    SQL
  end
end
