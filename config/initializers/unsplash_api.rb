Unsplash.configure do |config|
  config.application_access_key = ENV['UNSPLASH_ACCESS_KEY']
  config.application_secret = ENV['UNSPLASH_ACCESS_SECRET']
  #config.application_redirect_uri = "https://your-application.com/oauth/callback"
  config.utm_source = "portfolio-site"
  puts ENV["SECRET_KEY_BASE"]
  # optional:
  # config.logger = MyCustomLogger.new
end
