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
#   long: 118.2437
# )

# Home.create!(
#  title: 'Adorable Garden Gingerbread House',
#   price: 175,
#   lat: 37.7749,
#   long: 122.4194
# )

# Home.create!(
#   title: 'Dreamy Tropical Tree House',
#   price: 99,
#   lat: 45.5051,
#   long: 122.6750
# )

User.create!(
  email: 'demo@gmail.com',
  password: 'password7',
  name: "Demo"
)
