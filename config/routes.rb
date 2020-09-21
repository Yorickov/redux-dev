Rails.application.routes.draw do
  root 'home#index'
  get 'raw', to: 'raw#index'

  resources :tasks, only: %i[index create show destroy]
end
