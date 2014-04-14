class Post < ActiveRecord::Base
  attr_accessible :content
  
end

class Message

  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  attr_accessor :name, :email, :subject, :body, :catcher

  validates :name, :presence => true 
  validate :check_blank
  #validates :email, :format => { :with => %r{.+@.+\..+} }, :allow_blank => false
  #validates :catcher, :presence => false

  def check_blank
    errors.add :catcher if catcher.present?
  end

  puts 'Inits'
  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def persisted?
    false
  end

endnd
