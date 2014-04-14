class NotificationsMailer < ActionMailer::Base

  default :from => "noreply@imbenton.com"
  default :to => "bentonrochester@gmail.com"
  puts "notification mailer"
    def new_message(message)
    @message = message
     mail(:subject => "ImBenton Form #{message.subject}")
    end
  end
