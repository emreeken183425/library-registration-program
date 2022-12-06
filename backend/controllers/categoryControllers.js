const categoryModel = require("../models/category-models");


//***      POST/CREATE İŞLEMİ          ****/
const createOne = async (req, res) => {
  try {
    const { category } = req.body;
    const newCategory = await categoryModel.create({category});
    return res.status(200).json(newCategory);

  } catch (err) {
    return res.json({ message: err.message });
  }
};

//***      POST(ÇOKLU) İŞLEMİ          ****/
const bulkCreate = async (req, res) => {
  try {
    const newCategorys = await categoryModel.bulkCreate(req.body);
    return res.status(200).json(newCategorys);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      FİND/GET İŞLEMİ          ****/
const find = async (req, res) => {
  try {
    const category = await categoryModel.findAll();
    return res.json(category);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      UPDATE/PUT İŞLEMİ          ****/
const update = async (req, res) => {
  try {
    const { category } = req.body;
    const changecategory = await categoryModel.update({category:category },{
        where:{
            category:"tarih",
           
        }
    }).catch((err)=>{console.log(err); })

    return res.status(200).json(changecategory);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      DELETE İŞLEMİ          ****/
const delItem = async (req, res) => {
  try {
    const id=req.params.id;
    await categoryModel.destroy({where:{
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
