class ContactController < ApplicationController

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    if @message.valid?
      puts "message valid"
      flash.now.alert = "Please fill all fields."
      NotificationsMailer.new_message(@message).deliver
      redirect_to(:contact)
    else #message invalid
      flash.now.alert = "Please fill all fields."
      redirect_to(root_path) 
    end
  end
end
