class RedirectController < ApplicationController
    def redirect_to_external
        redirect_to "/addons/algodla.com/www/demo/index.htm"
    end
end
