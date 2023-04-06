Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"

  scope :api, defaults: { format: :json } do
    scope :v1 do
      devise_for :users, skip: [:sessions, :passwords, :registrations], defaults: { format: :json }
      as :user do
        post "/sign_in" => "devise/sessions#create"
        delete "/sign_out" => "devise/sessions#destroy"
        post "/sign_up" => "devise_invitable/registrations#create"
      end
    end
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %i[index show] do
        collection do
          post :invite
        end
      end
    end
  end

  get '/*path' => 'pages#index'
end
