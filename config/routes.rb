Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: {format: :json} do 
    resources :users, only: [:create, :index] 
    resource :session, only: [:create, :destroy]
  end
  root "static_pages_controller#root"
end