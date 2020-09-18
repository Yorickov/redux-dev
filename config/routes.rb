Rails.application.routes.draw do
  root 'home#index'
  get 'raw', to: 'raw#index'
end
