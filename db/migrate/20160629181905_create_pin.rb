class CreatePin < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.float :lat
      t.float :lng
      t.string :name
    end
  end
end
