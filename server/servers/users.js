class UsersService{

  constructor(){
    this.users=[];
    this.generate();
  }

  generate(){
    this.users.push(
      {
        Usuario: 'pbara07',
        Password: '1610'
      },
      {
        Usuario: 'pablo',
        Password: '111'
      },
      {
        Usuario: 'barahona',
        Password: '222'
      }
    )
  }

  find(){
    return this.users;
  }

  findOne(Usuario){
    return this.users.find(item=> item.Usuario == Usuario);
  }

}

module.exports = UsersService
