class Api::HomesController < ApplicationController

  def index 
    @homes = @homes ? Home.in_bounds(bounds) : Home.all()
    render "api/homes/index"
  end

  def show
    @home = Home.find(params[:id])
    render "api/homes/show"
  end

  def create 
    @home = Home.new(home_params)
    if @home.save 
      render "api/homes/show" 
    else 
      render json: @home.errors.full_messages, status: 422
    end
  end

  def update
    @home = Home.find_by(id: params[:id])
    if @home.update(home_params)
      render "api/homes/show"
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def destroy
    @home = Home.find_by(params[:id])
    @home.destroy 

    render "api/homes/show"
  end


  private

  def home_params
    params.require(:home).permit(:title, :price, :long, :lat, photos: [])
  end

  def bounds 
    params[:bounds]
  end

end
