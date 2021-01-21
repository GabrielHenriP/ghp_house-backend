// metodos: index, show, update, store, destroy
/*
index: listagem de sessão
show: listar uma unica sessao
store: criar uma sessao
update: editar uma sessao
destroy: deletar uma sessao
*/

import User from '../models/User';

class SessionController {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }

  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email }); // ou ({ email: email })
    }

    return res.json(user);
  }
}

export default new SessionController();
