json.extract! home, :id, :title, :price, :lat, :long
json.photoUrls home.photos.map { |file| url_for(file) }