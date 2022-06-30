# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first

User.delete_all
Doctor.delete_all

5.times do 
  User.create(
   first: Faker::Name.first_name,
   last: Faker::Name.last_name,
   phone: Faker::PhoneNumber.cell_phone,
   imag: Faker::Internet.url , 
   note: Faker::Lorem.word,

  )
end

5.times do 
  Doctor.create(
   first: Faker::Name.first_name,
   last: Faker::Name.last_name,
   title: Faker::Types.rb_string,
   imag: Faker::Internet.url , 
   special: Faker::Lorem.word,

  )
end
