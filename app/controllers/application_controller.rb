class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user
  
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private

  def current_user 
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def authenticate_user
    render json: { errors: "Not Authorized" }, status: :unauthorized unless current_user
  end

  def record_not_found(not_found)
      # render json: { error: "#{not_found.model} not found"}, status: :not_found
      render json: {errors: {not_found.model => "Not Found"}}, status: :not_found
    end
end
