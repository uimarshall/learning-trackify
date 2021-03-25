class CreateCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :image_url
      t.text :desc

      t.timestamps
    end
  end
end
