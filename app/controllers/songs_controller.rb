class SongsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Song.all, inlude: :chords
  end

end
