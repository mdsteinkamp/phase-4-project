class SongsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Song.all, inlude: :chords
  end

  def create
    song = Song.create!(song_params)
    render json: song, status: :created

  end

  private

  def song_params
    params.permit(:title, :artist, :structure)
  end

end
