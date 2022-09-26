class ExercisesController < ApplicationController
require 'rest-client'

    # before_action :find_exercise, only: :show
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    # GET '/exercises'
    def index
      render json: Exercise.all, status: :ok
    end
  
    # GET '/exercises/:id'
    def show
      render json: @exercise, status: :ok
    end

    def from_api
        key = ENV["my_api_key"]
        my_ruby_hash = {'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com', 'X-RapidAPI-Key': key}
        r = RestClient.get( 'https://exercisedb.p.rapidapi.com/exercises', headers= my_ruby_hash )
    
        data = JSON.parse(r.body)
        render json: data.slice(0, 40)


      # BACK UP DATA
        # r = RestClient.get ('http://localhost:3000/exercise', :accept => :json )
        # render json: r.body
    end
  
    private
  
    def find_exercise
      @exercise = Exercise.find(params[:id])
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
