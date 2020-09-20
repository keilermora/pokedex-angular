import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '@data/services/pokemon.service';
import { Pokemon } from '@data/types/pokemon';
import { PokemonFlavorTextEntry } from '@data/types/pokemon-flavor-text-entry';
import { PokemonGenera } from '@data/types/pokemon-genera';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | null = null;
  pokemonGenera: PokemonGenera | null = null;
  pokemonFlavorTextEntries: PokemonFlavorTextEntry[] = [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let pokemonId;

    if(this.route && this.route.snapshot && this.route.snapshot.paramMap) {
      let routeParamId = this.route.snapshot.paramMap.get('id');
      pokemonId = routeParamId ? parseInt(routeParamId) : 0;
    } else {
      pokemonId = 0;
    }

    this.pokemonService.getPokemon(pokemonId).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });

    this.pokemonService.getPokemonSpecie(pokemonId).subscribe((pokemonSpecie) => {
      // Obtener el tipo de Pokémon.
      const pokemonGenera = pokemonSpecie.genera.find((genera: any) => {
        return genera.language.name === 'es';
      });

      // Obtener los registros de la Pokédex en español.
      const pokemonFlavorTextEntriesES = pokemonSpecie.flavor_text_entries.filter((flavorTextEntry: PokemonFlavorTextEntry) => {
        return flavorTextEntry.language.name === 'es';
      });

      // Eliminar duplicados.
      const uniquePokemonFlavorTextEntries = pokemonFlavorTextEntriesES.reduce((accumulator: any, currentValue: PokemonFlavorTextEntry) => {
        const x = accumulator.find((flavorTextEntry: PokemonFlavorTextEntry) => {
          return flavorTextEntry.version.name === currentValue.version.name;
        });
        return !x ? accumulator.concat([ currentValue ]) : accumulator;
      }, []);

      this.pokemonGenera = pokemonGenera;
      this.pokemonFlavorTextEntries = uniquePokemonFlavorTextEntries;
    });
  }
}
