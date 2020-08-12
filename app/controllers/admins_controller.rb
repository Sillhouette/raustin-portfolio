class AdminsController < ApplicationController

  def show
      @admin = Admin.find_by(id: params[:id])
    if @admin
        render json: {
          admin: @admin
        }
      else
        render json: {
          status: 500,
          errors: ['admin not found']
        }
      end
    end
    
    def create
      @admin = Admin.new(admin_params)
      if @admin.save
        login!
        render json: {
          status: :created,
          admin: @admin
        }
      else 
        render json: {
          status: 500,
          errors: @admin.errors.full_messages
        }
      end
    end

  private
    
    def admin_params
      params.require(:admin).permit(:username, :email, :password, :password_confirmation)
    end
end