class Home < ApplicationRecord

  validates :title, :price, :lat, :long, presence: true
  # add associations and availability (true/false) column
  has_many_attached :photos
end
