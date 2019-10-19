class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all

        render json: PokemonSerializer.new(pokemons).to_serialized_json
    end

    def show
        pokemon = Pokemon.find(params[:id])
        render json: PokemonSerializer.new(pokemon).to_serialized_json
    end

    def create
        trainer = Trainer.find(params[:id])
        name = Faker::Name.middle_name
        species = Faker::Games::Pokemon.name
        pokemon = Pokemon.create(trainer_id: params[:id], nickname: name, species: species)
        render json: TrainerSerializer.new(trainer).to_serialized_json
    end

    def destroy
        pokemon = Pokemon.find(params[:id])
        trainer = Trainer.find(pokemon.trainer_id)
        pokemon.destroy
        render json: TrainerSerializer.new(trainer).to_serialized_json
    end

end
