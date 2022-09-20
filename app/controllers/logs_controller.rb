class LogsController < ApplicationController
    before_action :find_log, only: [:show, :update, :destroy]
    # skip_before_action :authenticate_user, except: [:index, :show]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    # GET '/logs'
    def index
      render json: Log.all, status: :ok
    end
  
    # GET '/logs/:id'
    def show
      render json: @log, status: :ok
    end
  
    # POST '/logs'
    def create
      log = Log.create!(log_params)
      render json: log, status: :created
    end
  
    # PATCH '/logs/:id'
    def update
      @log.update!(log_params)
      render json: @log, status: :ok
    end
  
    # DELETE '/logs/:id'
    def destroy
      @log.destroy
      head :no_content
    end
  
  
    private
  
    def find_log
      @log = Log.find(params[:id])
    end
  
    def log_params
      params.permit(:sets, :reps, :weight)
    end
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
