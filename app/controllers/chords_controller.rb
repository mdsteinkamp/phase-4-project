class ChordsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Chord.all
  end
end
