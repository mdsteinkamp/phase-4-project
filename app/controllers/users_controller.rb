class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

  def index
    users = User.all
    render json: users, include: ['chords', 'chords.song']
  end
  
  def show
    user = @current_user
    render json: user, include: ['chords', 'chords.song']
  rescue ActiveRecord::RecordNotFoud
    render_not_found_response
  end
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def render_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end

end
