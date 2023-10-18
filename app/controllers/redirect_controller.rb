class RedirectController < ApplicationController
    def redirect_to_external
        redirect_to "http://demo.algodla.com/" #, allow_other_host: true
    end
end
