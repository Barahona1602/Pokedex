const user=require('./users')
const pokemon=require('./pokemon')

function routerApi(app){
  app.use('/users', user);
  app.use('/pokemon', pokemon);

}

module.exports = routerApi;
