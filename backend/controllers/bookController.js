const bookModel = require("../models/book-models");

const createOne = async (req, res) => {
  try {
    const { bookName, author, category, publisher } = req.body;
    const newBook = await bookModel.create({
      bookName,
      author,
      category,
      publisher,
    });
    return res.status(200).json(newBook);
  } catch (err) {
    return res.json({ message: err.message });
  }
};
const bulkCreate = async (req, res) => {
  try {
    const newBooks = await bookModel.bulkCreate(req.body);
    return res.status(200).json(newBooks);
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const find = async (req, res) => {
  try {
    const book = await bookModel.findAll();
    return res.json(book);
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { bookName } = req.body;
    const changeBook = await bookModel.update({ bookName: bookName},{
        where:{
            bookName:"1987"
        }
    });

    return res.status(200).json(changeBook);
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const delItem = async (req, res) => {
  try {
    const id=req.params.id;
    await bookModel.destroy({where:{
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
