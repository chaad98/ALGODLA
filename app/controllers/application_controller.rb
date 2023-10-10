class ApplicationController < ActionController::Base
    add_flash_types :primary, :secondary, :light, :dark, :danger, :info, :warning, :success
end
