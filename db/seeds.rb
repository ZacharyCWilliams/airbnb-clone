# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Home.delete_all
User.delete_all

# Home.create!(
#   title: 'Silo Studio Cottage',
#   price: 225,
#   lat: 34.0522,
#   long: 118.2437,
#   photos: []
# )

# Home.create!(
#  title: 'Adorable Garden Gingerbread House',
#   price: 175,
#   lat: 37.7749,
#   long: 122.4194,
#   photos: []
# )

# Home.create!(
#   title: 'Dreamy Tropical Tree House',
#   price: 99,
#   lat: 45.5051,
#   long: 122.6750
# )

# require 'aws-sdk-s3'  # v2: require 'aws-sdk'
      
# s3 = Aws::S3::Resource.new(region: 'us-west-1')

# file = 'C:\file.txt'
# bucket = 'my-bucket'
      
# # Get just the file name
# name = File.basename(file)

# # Create the object to upload
# obj = s3.bucket(bucket).object(name)

# # Upload it      
# obj.upload_file(file)

User.create!(
  email: 'demo@gmail.com',
  password: 'password7',
  name: "Demo"
)

User.create!(
 email: 'zachcwill@icloud.com',
 password: 'Password1$',
 name: 'Zach'
)







# require 'aws-sdk-s3' 

# s3 = Aws::S3::Resource.new(region: 'us-west-1') # Change this to your region
require 'open-uri'

Home.destroy_all

# Home 1

home1 = Home.create!(
  title: 'Gorgeous View & Beautiful Pool',
  price: 107,
  lat: 45.5051,
  long: 122.6750
)

photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-1/1.jpg')
home1.photos.attach( io: photo1, filename: '1.jpg')

photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-1/2.jpg')
home1.photos.attach( io: photo2, filename: '2.jpg')

photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-1/3.jpg')
home1.photos.attach( io: photo3, filename: '3.jpg')

# Home 2

home2 = Home.create!(
  title: 'Offgrid Wild Lands Camp',
  price: 57,
  lat: 102.863,
  long: 187.923
)

h2photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-2/1.jpg')
home2.photos.attach( io: h2photo1, filename: '1.jpg')

h2photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-2/2.jpg')
home2.photos.attach( io: h2photo2, filename: '2.jpg')

h2photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-2/3.jpg')
home2.photos.attach( io: h2photo3, filename: '3.jpg')

# Home 3

home3 = Home.create!(
  title: 'The Woodland Retreat',
  price: 84,
  lat: 24.978,
  long: 145.221
)

h3photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-3/1.jpg')
home3.photos.attach( io: h3photo1, filename: '1.jpg')

h3photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-3/2.jpg')
home3.photos.attach( io: h3photo2, filename: '2.jpg')

h3photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-3/3.jpg')
home3.photos.attach( io: h3photo3, filename: '3.jpg')

# Home 4

home4 = Home.create!(
  title: 'Warm Homely Ranch',
  price: 111,
  lat: 112.173,
  long: 88.291
)

h4photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-4/1.jpg')
home4.photos.attach( io: h4photo1, filename: '1.jpg')

h4photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-4/2.jpg')
home4.photos.attach( io: h4photo2, filename: '2.jpg')

h4photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-4/3.jpg')
home4.photos.attach( io: h4photo3, filename: '3.jpg')

# Home 5

home5 = Home.create!(
  title: 'Modern Beachfront Paradise',
  price: 197,
  lat: 18,
  long: 141.12
)

h5photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-5/1.jpg')
home5.photos.attach( io: h5photo1, filename: '1.jpg')

h5photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-5/2.jpg')
home5.photos.attach( io: h5photo2, filename: '2.jpg')

h5photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-5/3.jpg')
home5.photos.attach( io: h5photo3, filename: '3.jpg')

# Home 6

home6 = Home.create!(
  title: 'The Forest Escape',
  price: 112,
  lat: 64.978,
  long: 105.111
)

h6photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-6/1.jpg')
home6.photos.attach( io: h6photo1, filename: '1.jpg')

h6photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-6/2.jpg')
home6.photos.attach( io: h6photo2, filename: '2.jpg')

h6photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-6/3.jpg')
home6.photos.attach( io: h6photo3, filename: '3.jpg')

home7 = Home.create!(
  title: 'Meridian Retreat',
  price: 154,
  lat: 112.867,
  long: 161.222
)

# Home 7

h7photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-7/1.jpg')
home7.photos.attach( io: h7photo1, filename: '1.jpg')

h7photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-7/2.jpg')
home7.photos.attach( io: h7photo2, filename: '2.jpg')

h7photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-7/3.jpg')
home7.photos.attach( io: h7photo3, filename: '3.jpg')

# Home 8

home8 = Home.create!(
  title: 'Rooftop Loft',
  price: 101,
  lat: 115.867,
  long: 72.101
)

h8photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-8/1.jpg')
home8.photos.attach( io: h8photo1, filename: '1.jpg')

h8photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-8/2.jpg')
home8.photos.attach( io: h8photo2, filename: '2.jpg')

h8photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-8/3.jpg')
home8.photos.attach( io: h8photo3, filename: '3.jpg')

# Home 9

home9 = Home.create!(
  title: 'Paradise Vacay Spot',
  price: 121,
  lat: 117.001,
  long: 112.901
)

h9photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-9/1.jpg')
home9.photos.attach( io: h9photo1, filename: '1.jpg')

h9photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-9/2.jpg')
home9.photos.attach( io: h9photo2, filename: '2.jpg')

h9photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-9/3.jpg')
home9.photos.attach( io: h9photo3, filename: '3.jpg')

home10 = Home.create!(
  title: 'The Golfstream Camper 5000',
  price: 55,
  lat: 75.997,
  long: 53.828
)

h10photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-10/1.jpg')
home10.photos.attach( io: h10photo1, filename: '1.jpg')

h10photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-10/2.jpg')
home10.photos.attach( io: h10photo2, filename: '2.jpg')

h10photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-10/3.jpg')
home10.photos.attach( io: h10photo3, filename: '3.jpg')

# Home 11

home11 = Home.create!(
  title: 'The Eco Dome',
  price: 38,
  lat: 115.078,
  long: 46.997
)

h11photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-11/1.jpg')
home11.photos.attach( io: h11photo1, filename: '1.jpg')

h11photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-11/2.jpg')
home11.photos.attach( io: h11photo2, filename: '2.jpg')

h11photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-11/3.jpg')
home11.photos.attach( io: h11photo3, filename: '3.jpg')


home12 = Home.create!(
  title: 'Wonder Land Escapade',
  price: 112,
  lat: 202.017,
  long: 111.182
)

h12photo1 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-12/1.jpg')
home12.photos.attach( io: h12photo1, filename: '1.jpg')

h12photo2 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-12/2.jpg')
home12.photos.attach( io: h12photo2, filename: '2.jpg')

h12photo3 = open('/Users/zachwilliams/Desktop/airbnb-clone-home-images/seed-file/house-12/3.jpg')
home12.photos.attach( io: h12photo3, filename: '3.jpg')

