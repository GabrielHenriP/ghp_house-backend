import House from '../models/House';
import Home from '../models/House';
import User from '../models/User';

class HouseController{

  async index(req, res){
    const { status } = req.query;
    const houses = await House.find( { status});
    return res.json(houses)
  }

  async store(req,res){
    const { filename } = req.file
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const house = await Home.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status
    })
    
    return res.json(house)
  }

  async update(req, res){
    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const house = await House.findById(house_id)
    console.log(user)
    console.log(house)

    

    await House.updateOne({ _id: house_id }, {
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status
    })

  }
}

export default new HouseController();