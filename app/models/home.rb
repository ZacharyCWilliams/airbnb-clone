class Home < ApplicationRecord

  validates :title, :price, :lat, :long, presence: true
  # add associations and availability (true/false) column
  has_many_attached :photos

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

end
