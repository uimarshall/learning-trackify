Rails.application.routes.draw do
   root 'pages#index'
   namespace :api do
    namespace :v1 do
      get 'courses/mine', to: 'courses#my_courses'
      get 'measurements', to: 'measurements#my_measurements'
      resources :courses do
         resources :measurements
      end

      post 'auth/login', to: 'authentication#authenticate'
      post 'signup', to: 'users#create'
      post 'register_course', to: 'user_courses#create'
      delete 'unregister_course/:course_id', to: 'user_courses#destroy'
    end  
  end
  # If a non-existed route is requested for,route back to index page
  get '*path', to: 'pages#index', via: :all
end

end
