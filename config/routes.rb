Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    
    namespace :api do
      resources :doctors do
        resources :appointments
        get '/doctorId/unappointmented', to: 'appointments#unappointmentedUsers'
        get '/doctorId/appointmented', to: 'appointments@appointmentedUsers'
        get '/doctorUsers',to: 'doctors#doctorUsers'
      end
      
      resources :users do
        get'/userDoctors',to: 'users#userDoctors'
    end
 
  end
end