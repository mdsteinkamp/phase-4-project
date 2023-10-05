class ChordsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Chord.all
  end

  def destroy
    chord = Chord.find_by(id: params[:id])
    chord.destroy
    head :no_content
  end
end


