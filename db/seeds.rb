# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user = User.create!([
#     {name: 'John', email: 'john@test.com', password: 'pass123', password_confirmation: 'pass123'},
#     {name: 'Doe', email: 'doe@test.com', password: 'pass123', password_confirmation: 'pass123'}
#     ])

user = User.create!(name: 'John', email: 'john@test.com', password: 'pass123', password_confirmation: 'pass123')

courses = [
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/ruby.png', 'Ruby', 'A good career course'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/css3.png', 'CSS3', 'A better course'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/react.png', 'React', 'A developmental course'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/java.png', 'Java', 'Beginner course'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/python-48.png', 'Python', 'Intermediate course'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/redux.png', 'Redux', 'For advance learners'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/javascript.png', 'JavaScript', 'For advance learners'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/mongodb.png',  'Mongodb', 'A higher level course'],
  ['https://learning-trackify.s3.eu-west-3.amazonaws.com/nodejs.png', 'NodeJs', 'For advance learners']
]
courses.each do |x|
  user.courses << Course.create(name: x[1], desc: x[2], image_url: x[0])
end

user.courses.each do |course|
  14.times do
    course.measurements.create({
      date_m: Faker::Date.backward(days: 14),
      units: Faker::Number.number(digits: 2),
      user_id: user.id
      })
  end
end
