Rails.application.routes.draw do
    root to: 'static_pages#root'
    resources :pins, only: [:index, :create]
end
