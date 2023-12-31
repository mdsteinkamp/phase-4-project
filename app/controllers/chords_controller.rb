class ChordsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    chords = Chord.all
    render json: chords
  end

  def show
    if params[:song_id]
      song = Song.find_by(id: params[:song_id])
      chord = song.chord.find_by(id: params[:id])
    else
      chord = Chord.find_by(id: params[:id])
    end
    if chord
      render json: chord
    else
      render json: { error: "Chord not found" }, status: :not_found
    end
  end

  def create
    chord = @current_user.chords.create!(chord_params)
    render json: chord, status: :created
  end

  def update
    chord = @current_user.chords.find_by(id: params[:id])
    if chord
      chord.update!(chord_params)
      render json: chord, status: :ok
    else
      render json: { error: "Not authorized to edit this chord"}, status: :unauthorized
    end

  end
  
  def destroy
    chord = @current_user.chords.find_by(id: params[:id])
    if chord
      chord.destroy
      head :no_content
    else render json: { error: "Not authorized to remove this chord" }, status: :unauthorized
    end
  end

  private 

  def chord_params
    params.permit(:name, :notes, :inversion, :comments, :image_url, :song_id)
  end

end