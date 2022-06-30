class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :first
      t.string :last
      t.string :title
      t.string :imag
      t.text :special

      t.timestamps
    end
  end
end
