const express = require("express");

const router = express.Router();
const UsersService = require('./../servers/users')
const service = new UsersService();

router.get("/", (req, res) =>{
  const users = service.find();
  res.json(users);
});

router.get('/:usuario', (req, res) => {
  const {usuario} = req.params;
  const users = service.findOne(usuario);
  res.json(users);
})

module.exports = router;
