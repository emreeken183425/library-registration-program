const publisherModel = require("../models/publisher-models");


//***      POST/CREATE İŞLEMİ          ****/
const createOne = async (req, res) => {
  try {
    const { publisher } = req.body;
    const newPublisher = await publisherModel.create({publisher});
    return res.status(200).json(newPublisher);

  } catch (err) {
    return res.json({ message: err.message });
  }
};

//***      POST(ÇOKLU) İŞLEMİ          ****/
const bulkCreate = async (req, res) => {
  try {
    const newPublishers = await publisherModel.bulkCreate(req.body);
    return res.status(200).json(newPublishers);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      FİND/GET İŞLEMİ          ****/
const find = async (req, res) => {
  try {
    const publisher = await publisherModel.findAll();
    return res.json(publisher);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      UPDATE/PUT İŞLEMİ          ****/
const update = async (req, res) => {
  try {
    const { publisher } = req.body;
    const changepublisher = await publisherModel.update({publisher:publisher },{
        where:{
            publisher:"YK",
           
        }
    }).catch((err)=>{console.log(err); })

    return res.status(200).json(changepublisher);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      DELETE İŞLEMİ          ****/
const delItem = async (req, res) => {
  try {
    const id=req.params.id;
    await publisherModel.destroy({where:{
        id:id
    }})

return res.json()

  } catch (err) {
    return res.json({ message: err.message });
  }
};

module.exports = {
  createOne,
  bulkCreate,
  find,
  update,
  delItem,
};
