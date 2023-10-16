Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    root "pages#landing_page"

    get "contact", to: "pages#contact_us"
    get "terms-of-use", to: "pages#terms"
    get "terms-of-use-vps", to: "pages#terms_vps"
    get "privacy-and-cookies", to: "pages#privacy_cookies"

    resources :enquiries
  end
  
end
