const authorModel = require("../models/author-models");


//***      POST/CREATE İŞLEMİ          ****/
const createOne = async (req, res) => {
  try {
    const { author } = req.body;
    const newAuthor = await authorModel.create({author});
    return res.status(200).json(newAuthor);

  } catch (err) {
    return res.json({ message: err.message });
  }
};

//***      POST(ÇOKLU) İŞLEMİ          ****/
const bulkCreate = async (req, res) => {
  try {
    const newAuthors = await authorModel.bulkCreate(req.body);
    return res.status(200).json(newAuthors);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      FİND/GET İŞLEMİ          ****/
const find = async (req, res) => {
  try {
    const author = await authorModel.findAll();
    return res.json(author);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      UPDATE/PUT İŞLEMİ          ****/
const update = async (req, res) => {
  try {
    const { author } = req.body;
    const changeauthor = await authorModel.update({author:author },{
        where:{
            author:"Tolstoy",
           
        }
    }).catch((err)=>{console.log(err); })

    return res.status(200).json(changeauthor);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      DELETE İŞLEMİ          ****/
const delItem = async (req, res) => {
  try {
    const id=req.params.id;
    await authorModel.destroy({where:{
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
