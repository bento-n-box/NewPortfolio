 class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name
      t.string :title
      t.text :content
      t.string :image_file, :firstimage

      t.timestamps
    end
  end
end

class AddAvatarColumnsToUser < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.has_attached_file :photo
    end
  end

  def self.down
    drop_attached_file :photo
  end
end
