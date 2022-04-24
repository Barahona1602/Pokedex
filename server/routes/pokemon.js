const express = require("express");

const router = express.Router();
const PokemonService = require('./../servers/pokemon');
const service = new PokemonService();

router.get("/", (req, res) =>{
  const pokemon = service.find();
  res.json(pokemon);
});

router.get('/pokenumero/:numero', (req, res) => {
  const {numero} = req.params;
  const poke = service.findOne(numero);
  res.json(poke);
});

router.get('/pokenombre/:nombre', (req, res) => {
  const {nombre} = req.params;
  const poke2 = service.findOne2(nombre);
  res.json(poke2);
});

router.get('/poketipo/Agua', (req, res) => {
  const Agua = service.find2();
  res.json(Agua);
});

router.get('/poketipo/Hierba', (req, res) => {
  const Hierba = service.findh();
  res.json(Hierba);
});

router.get('/poketipo/Fuego', (req, res) => {
  const Fuego = service.find3();
  res.json(Fuego);
});

router.get('/poke/Agua', (req, res) => {
  const Agua = service.find2();
  res.json(Agua);
});

router.get('/poke/Hierba', (req, res) => {
  const Hierba = service.findh();
  res.json(Hierba);
});

router.get('/poke/Fuego', (req, res) => {
  const Fuego = service.find3();
  res.json(Fuego);
});

router.get('/poke/1', (req, res) => {
  const Bulbasur = service.find1();
  res.json(Bulbasur);
});

router.get('/poke/Bulbasur', (req, res) => {
  const Bulbasur = service.find1();
  res.json(Bulbasur);
});

router.get('/poke/4', (req, res) => {
  const Charmander = service.find4();
  res.json(Charmander);
});

router.get('/poke/Charmander', (req, res) => {
  const Charmander = service.find4();
  res.json(Charmander);
});

router.get('/poke/7', (req, res) => {
  const Squirtle = service.find7();
  res.json(Squirtle);
});

router.get('/poke/Squirtle', (req, res) => {
  const Squirtle = service.find7();
  res.json(Squirtle);
});

router.get('/poke/37', (req, res) => {
  const Vulpix = service.find37();
  res.json(Vulpix);
});

router.get('/poke/Vulpix', (req, res) => {
  const Vulpix = service.find37();
  res.json(Vulpix);
});

router.get('/poke/43', (req, res) => {
  const Oddish = service.find43();
  res.json(Oddish);
});

router.get('/poke/Oddish', (req, res) => {
  const Oddish = service.find43();
  res.json(Oddish);
});

router.get('/poke/Psyduck', (req, res) => {
  const Psyduck = service.find54();
  res.json(Psyduck);
});

router.get('/poke/54', (req, res) => {
  const Psyduck = service.find54();
  res.json(Psyduck);
});

router.get('/poke/58', (req, res) => {
  const Growlithe = service.find58();
  res.json(Growlithe);
});

router.get('/poke/Growlithe', (req, res) => {
  const Growlithe = service.find58();
  res.json(Growlithe);
});

router.get('/poke/60', (req, res) => {
  const Poliwag = service.find60();
  res.json(Poliwag);
});

router.get('/poke/Poliwag', (req, res) => {
  const Poliwag = service.find60();
  res.json(Poliwag);
});

router.get('/poke/69', (req, res) => {
  const Bellsprout = service.find69();
  res.json(Bellsprout);
});

router.get('/poke/Bellsprout', (req, res) => {
  const Bellsprout = service.find69();
  res.json(Bellsprout);
});

router.get('/poke/72', (req, res) => {
  const Tentacool = service.find72();
  res.json(Tentacool);
});

router.get('/poke/Tentacool', (req, res) => {
  const Tentacool = service.find72();
  res.json(Tentacool);
});

router.get('/poke/77', (req, res) => {
  const Ponyta = service.find77();
  res.json(Ponyta);
});

router.get('/poke/Ponyta', (req, res) => {
  const Ponyta = service.find77();
  res.json(Ponyta);
});

router.get('/poke/86', (req, res) => {
  const Seel = service.find86();
  res.json(Seel);
});

router.get('/poke/Seel', (req, res) => {
  const Seel = service.find86();
  res.json(Seel);
});

router.get('/poke/102', (req, res) => {
  const Exeggcute = service.find102();
  res.json(Exeggcute);
});

router.get('/poke/Exeggcute', (req, res) => {
  const Exeggcute = service.find102();
  res.json(Exeggcute);
});

router.get('/poke/114', (req, res) => {
  const Tangela = service.find114();
  res.json(Tangela);
});

router.get('/poke/Tangela', (req, res) => {
  const Tangela = service.find114();
  res.json(Tangela);
});

router.get('/poke/126', (req, res) => {
  const Magmar = service.find126();
  res.json(Magmar);
});

router.get('/poke/Magmar', (req, res) => {
  const Magmar = service.find126();
  res.json(Magmar);
});

module.exports = router;
