class EnquiriesController < ApplicationController
    def index
        @enquiries = Enquiry.all
    end

    def show
    end

    def new
        @enquiry = Enquiry.new
    end

    def create
        @enquiry = Enquiry.new(enquiry_params)

        if @enquiry.save
            redirect_to root_path, success: "Form has been submitted successfully!"
        else
            render :new
        end
    end

    def edit
    end

    def update
        if @enquiry.update(enquiry_params)
            redirect_to root_path, success: "JSON data has been updated successfully!"
        else
            render :edit
        end
    end
    
    private

    def enquiry_params
        params.require(:enquiry).permit(:name, :email, :phone_number, :message)
    end
end
