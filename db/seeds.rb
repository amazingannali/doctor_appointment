# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first

Doctor.delete_all
User.delete_all

5.times do 
  Doctor.create(
   first: Faker::Name.first_name,
   last: Faker::Name.last_name,
   title: Faker::Types.rb_string,
   imag: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
   special: Faker::Lorem.word

  )
end

5.times do 
  User.create(
   first: Faker::Name.first_name,
   last: Faker::Name.last_name,
   phone: Faker::PhoneNumber.cell_phone,
   image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
   note: Faker::Lorem.word

  )
end