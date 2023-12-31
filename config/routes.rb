Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :users, only: [:index, :show]
  resources :songs, only: [:index, :create] do
    resources :chords, only: [:show]
  end
  resources :chords
end
