class NotificationsMailer < ActionMailer::Base

  default :from => "noreply@imbenton.com"
  default :to => "hello@imbenton.com"

  def new_message(message)
    @message = message
    mail(:subject => "[Site Email] #{message.subject}")
  end

end