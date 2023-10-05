class ChordsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Chord.all
  end

  def destroy
    chord = @current_user.chords.find_by(id: params[:id])
    if chord
      chord.destroy
      head :no_content
    else render json: { error: "Not authorized to edit this chord" }, status: :unauthorized
  end

  def show
    chord = Chord.find_by(id: params[:id])
    if chord
      render json: chord
    else
      render json: { error: "Chord not found" }, status: :not_found
    end
  end
  
end


