class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :bodyPart
      t.string :equipment
      t.string :gifURL
      t.string :name
      t.string :target

      t.timestamps
    end
  end
end
