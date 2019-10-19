# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'
require 'securerandom'
 
Trainer.delete_all
Pokemon.delete_all


trainers_name = [
  'Ash Ketchum',
  'Misty',
  'Brock',
  'Professor Oak',
  'Giovanni',
  'Jessie',
  'James',
  'Gary',
  'May'
]
 
trainer_images = [
  'https://upload.wikimedia.org/wikipedia/en/0/09/AshXYanime.png',
  'https://upload.wikimedia.org/wikipedia/en/b/b1/MistyEP.png',
  'https://upload.wikimedia.org/wikipedia/en/7/71/DP-Brock.png',
  'https://vignette.wikia.nocookie.net/pokemon/images/8/84/Professor_Oak_XY.png/revision/latest?cb=20131221014829',
  'https://cdn.bulbagarden.net/upload/b/b8/Giovanni_SM.png',
  'https://cdn.bulbagarden.net/upload/7/7d/Jessie_SM.png',
  'https://cdn.bulbagarden.net/upload/2/2f/James_SM.png',
  'https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/b/bd/Gary_Oak.png/revision/latest?cb=20140701130214',
  'https://i.pinimg.com/originals/7b/61/c3/7b61c355fcffc30c4e5257e6996fc3f3.png'
]

trainer_collection = []

i=0
trainers_name.each do |name|
  trainer_collection << Trainer.create(name: name, image: trainer_images[i])
  i+=1
end
 
trainer_collection.each do |trainer|
  team_size = (SecureRandom.random_number(6) + 1).floor
 
  (1..team_size).each do |poke|
    name = Faker::Name.middle_name
    species = Faker::Games::Pokemon.name
    Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
  end
end



