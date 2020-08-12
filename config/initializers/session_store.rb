if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_austin-melchior-portfolio', domain: 'www.austinmelchior.com'
else
    Rails.application.config.session_store :cookie_store, key: '_austin-melchior-portfolio' 
end