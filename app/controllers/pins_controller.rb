class PinsController < ApplicationController
  def index
    render json: Pin.all
  end

  def create
    lat = params[:lat]
    lng = params[:lng]
    pin = Pin.create({ lat: lat, lng: lng })
    render json: pin
  end
end
