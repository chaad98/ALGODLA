class RedirectController < ApplicationController
    def redirect_to_external
        redirect_to "https://algodla.com/demo/index.htm" #, allow_other_host: true
    end
end