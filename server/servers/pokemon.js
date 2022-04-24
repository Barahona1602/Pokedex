class PokemonService{

  constructor(){
    this.agua=[];
    this.pokemon=[];
    this.fuego=[];
    this.hierba=[];
    this.bulbasur=[];
    this.charmander=[];
    this.squirtle=[];
    this.vulpix=[];
    this.oddish=[];
    this.psyduck=[];
    this.growlithe=[];
    this.poliwag=[];
    this.bellsprout=[];
    this.tentacool=[];
    this.ponyta=[];
    this.seel=[];
    this.exeggcute=[];
    this.tangela=[];
    this.magmar=[];

    this.generate();
    this.generate2();
    this.generate3();
    this.generate4();
    this.bulbasur1();
    this.charmander1();
    this.squirtle1();
    this.vulpix1();
    this.oddish1();
    this.psyduck1();
    this.growlithe1();
    this.poliwag1();
    this.bellsprout1();
    this.tentacool1();
    this.ponyta1();
    this.seel1();
    this.exeggcute1();
    this.tangela1();
    this.magmar1();

  }

  generate(){
    this.pokemon.push(
      {
        Numero: 1,
        Nombre: 'Bulbasur',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        Ataque: 'Espesura'
      },
      {
        Numero: 4,
        Nombre: 'Charmander',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        Ataque: 'Mar Llamas'
      },
      {
        Numero: 7,
        Nombre: 'Squirtle',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        Ataque: 'Torrente'
      },
      {
        Numero: 37,
        Nombre: 'Vulpix',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
        Ataque: 'Absorbe Fuego'
      },
      {
        Numero: 43,
        Nombre: 'Oddish',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
        Ataque: 'Clorofila'
      },
      {
        Numero: 54,
        Nombre: 'Psyduck',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
        Ataque: 'Humedad'
      },
      {
        Numero: 58,
        Nombre: 'Growlithe',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
        Ataque: 'Intimidación'
      },
      {
        Numero: 60,
        Nombre: 'Poliwag',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
        Ataque: 'Absorbe Agua'
      },
      {
        Numero: 69,
        Nombre: 'Bellsprout',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
        Ataque: 'Clorofila'
      },
      {
        Numero: 72,
        Nombre: 'Tentacool',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
        Ataque: 'Cuerpo Puro'
      },
      {
        Numero: 77,
        Nombre: 'Ponyta',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
        Ataque: 'Fuga'
      },
      {
        Numero: 86,
        Nombre: 'Seel',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
        Ataque: 'Sebo'
      },
      {
        Numero: 102,
        Nombre: 'Exeggcute',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
        Ataque: 'Clorofila'
      },
      {
        Numero: 114,
        Nombre: 'Tangela',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
        Ataque: 'Defensa Hoja'
      },
      {
        Numero: 126,
        Nombre: 'Magmar',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
        Ataque: 'Cuerpo Llama'
      },
    )
  }

  generate3(){
    this.fuego.push(
      {
        Numero: 4,
        Nombre: 'Charmander',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        Ataque: 'Mar Llamas'
      },
      {
        Numero: 37,
        Nombre: 'Vulpix',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
        Ataque: 'Absorbe Fuego'
      },
      {
        Numero: 58,
        Nombre: 'Growlithe',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
        Ataque: 'Intimidación'
      },
      {
        Numero: 77,
        Nombre: 'Ponyta',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
        Ataque: 'Fuga'
      },
      {
        Numero: 126,
        Nombre: 'Magmar',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
        Ataque: 'Cuerpo Llama'
      }
    )
  }

  generate4(){
    this.hierba.push(
      {
        Numero: 1,
        Nombre: 'Bulbasur',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        Ataque: 'Espesura'
      },
      {
        Numero: 43,
        Nombre: 'Oddish',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
        Ataque: 'Clorofila'
      },
      {
        Numero: 69,
        Nombre: 'Bellsprout',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
        Ataque: 'Clorofila'
      },
      {
        Numero: 102,
        Nombre: 'Exeggcute',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
        Ataque: 'Clorofila'
      },
      {
        Numero: 114,
        Nombre: 'Tangela',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
        Ataque: 'Defensa Hoja'
      }
    )
  }


  generate2(){
    this.agua.push(
      {
        Numero: 7,
        Nombre: 'Squirtle',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        Ataque: 'Torrente'
      },
      {
        Numero: 8,
        Nombre: 'Wartortle',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
        Ataque: 'Torrente'
      },
      {
        Numero: 54,
        Nombre: 'Psyduck',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
        Ataque: 'Humedad'
      },
      {
        Numero: 60,
        Nombre: 'Poliwag',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
        Ataque: 'Absorbe Agua'
      },
      {
        Numero: 72,
        Nombre: 'Tentacool',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
        Ataque: 'Cuerpo Puro'
      }
    )
  }

  bulbasur1(){
    this.bulbasur.push(
      {
        Numero: 1,
        Nombre: 'Bulbasur',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        Ataque: 'Espesura'
      }
    )
  }

  charmander1(){
    this.charmander.push(
      {
        Numero: 4,
        Nombre: 'Charmander',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        Ataque: 'Mar Llamas'
      }
    )
  }

  squirtle1(){
    this.squirtle.push(
      {
        Numero: 7,
        Nombre: 'Squirtle',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        Ataque: 'Torrente'
      }
    )
  }

  vulpix1(){
    this.vulpix.push(
      {
        Numero: 37,
        Nombre: 'Vulpix',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
        Ataque: 'Absorbe Fuego'
      }
    )
  }

  oddish1(){
    this.oddish.push(
      {
        Numero: 43,
        Nombre: 'Oddish',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
        Ataque: 'Clorofila'
      }
    )
  }

  psyduck1(){
    this.psyduck.push(
      {
        Numero: 54,
        Nombre: 'Psyduck',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
        Ataque: 'Humedad'
      }
    )
  }

  growlithe1(){
    this.growlithe.push(
      {
        Numero: 58,
        Nombre: 'Growlithe',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
        Ataque: 'Intimidación'
      }
    )
  }

  poliwag1(){
    this.poliwag.push(
      {
        Numero: 60,
        Nombre: 'Poliwag',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
        Ataque: 'Absorbe Agua'
      }
    )
  }

  bellsprout1(){
    this.bellsprout.push(
      {
        Numero: 69,
        Nombre: 'Bellsprout',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
        Ataque: 'Clorofila'
      }
    )
  }

  tentacool1(){
    this.tentacool.push(
      {
        Numero: 72,
        Nombre: 'Tentacool',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
        Ataque: 'Cuerpo Puro'
      }
    )
  }

  ponyta1(){
    this.ponyta.push(
      {
        Numero: 77,
        Nombre: 'Ponyta',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
        Ataque: 'Fuga'
      }
    )
  }

  seel1(){
    this.seel.push(
      {
        Numero: 86,
        Nombre: 'Seel',
        Tipo: 'Agua',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
        Ataque: 'Sebo'
      }
    )
  }

  exeggcute1(){
    this.exeggcute.push(
      {
        Numero: 102,
        Nombre: 'Exeggcute',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
        Ataque: 'Clorofila'
      }
    )
  }

  tangela1(){
    this.tangela.push(
      {
        Numero: 114,
        Nombre: 'Tangela',
        Tipo: 'Hierba',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
        Ataque: 'Defensa Hoja'
      }
    )
  }

  magmar1(){
    this.magmar.push(
      {
        Numero: 126,
        Nombre: 'Magmar',
        Tipo: 'Fuego',
        Imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
        Ataque: 'Cuerpo Llama'
      }
    )
  }

  find1(){
    return this.bulbasur;
  }

  find4(){
    return this.charmander;
  }
  
  find7(){
    return this.squirtle;
  } 

  find37(){
    return this.vulpix;
  } 

  find43(){
    return this.oddish;
  } 

  find54(){
    return this.psyduck;
  } 

  find58(){
    return this.growlithe;
  } 

  find60(){
    return this.poliwag;
  } 

  find69(){
    return this.bellsprout;
  } 

  find72(){
    return this.tentacool;
  } 

  find77(){
    return this.ponyta;
  } 

  find86(){
    return this.seel;
  } 

  find102(){
    return this.exeggcute;
  } 

  find114(){
    return this.tangela;
  } 

  find126(){
    return this.magmar;
  }

  find(){
    return this.pokemon;
  }

  findOne(Numero){
    return this.pokemon.find(item=> item.Numero == Numero);
  }

  findOne2(Nombre){
    return this.pokemon.find(item => item.Nombre == Nombre);
  }


  find2(){
    return this.agua;
  }

  find3(){
    return this.fuego;
  }

  findh(){
    return this.hierba
  }

}

module.exports = PokemonService
