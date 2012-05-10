class NotificationsMailer < ActionMailer::Base

  default :from => "noreply@imbenton.com"
  default :to => "bentonrochester@gmail.com"

  def new_message(message)
    @message = message
    mail(:subject => "[YourWebsite.tld] #{message.subject}")
  end

end