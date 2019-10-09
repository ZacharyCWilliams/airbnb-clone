class Home < ApplicationRecord

  validates :title, :price, :location
  # add associations and availability (true/false) column
end
