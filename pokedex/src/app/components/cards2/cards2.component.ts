import { Component, Input, OnInit } from '@angular/core';
import { PokemonInterface } from 'src/app/models/PokemonInterface';

@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.css']
})
export class Cards2Component implements OnInit {

  constructor() { }

  @Input() datoPokemon : PokemonInterface;

  ngOnInit(): void {
  }

}

