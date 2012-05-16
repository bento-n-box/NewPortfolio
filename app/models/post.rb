class Post < ActiveRecord::Base
  attr_accessible :content, :firstimage, :name, :title, :photo
  has_attached_file :photo

  attr_accessor :photo_file_name
   	
	
	
	end

