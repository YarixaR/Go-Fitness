class ExercisesController < ApplicationController
    before_action :find_exercise, only: :show
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    # GET '/exercises'
    def index
      render json: Exercise.all, status: :ok
    end
  
    # GET '/exercises/:id'
    def show
      render json: @exercise, status: :ok
    end
  
    private
  
    def find_exercise
      @exercise = Exercise.find(params[:id])
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
