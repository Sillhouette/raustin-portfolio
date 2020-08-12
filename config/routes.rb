Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :blog_posts
      get '/blog_posts/:id/edit', to: 'blog_posts#edit'
    end
  end

  resources :admins, only: [:create, :show, :index]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
