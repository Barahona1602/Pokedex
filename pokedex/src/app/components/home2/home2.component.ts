import { Component, OnInit} from '@angular/core';

import { PokemonInterface } from 'src/app/models/PokemonInterface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  value:any;

  constructor(public pokemonService: PokemonService, private http:HttpClient) { }

  datosPokemon: PokemonInterface[] = [];
  

  ngOnInit(): void {
    this.ObtenerPokemons();

  }

  ObtenerPokemons(){
    this.pokemonService.CargarDatos().subscribe(async (res) => 
    {
     let valores: any = res;
      this.datosPokemon = valores;
    },
    err => console.log(err));
  }

  ObtenerPokemonsd(){
    let id1 = this.value;
    
   this.http.get<any>(`http://localhost:3000/pokemon/poke/${this.value}`).subscribe(async (res) => 
    {
     let valores: any = res;
      this.datosPokemon = valores;

    },
    err => console.log(err));
  } 
      
}

