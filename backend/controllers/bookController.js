const bookModel = require("../models/books");


//**** POST İŞLEMİ  ****/
const  createOne=async(req,res)=>{
    try {
        const {bookName}=req.body;
        const newBook=await bookModel.create({
            bookName
            
        })
       return res.status(201).json(newBook)

    } catch (err) {
        return res.json({message:err.message})
    }
}



//**** BİRDEN FAZLA POST İŞLEMİ  ****/
const  bulkCreate=async(req,res)=>{
    try {
        const newBooks=await bookModel.bulkCreate(req.body);
        return res.status(201).json(newBooks)


    } catch (err) {
        return res.json({message:err.message})
    }
}

//**** GET İŞLEMİ  ****/
const  find=async(req,res)=>{
    try {
        const book=await bookModel.findAll();
        return res.json(user)


    } catch (err) {
        return res.json({message:err.message})
    }
}

//**** PUT/UPDATE İŞLEMİ  ****/
const  update=async(req,res)=>{
    try {
        const {bookName}=req.body;
       const changeBook= await bookModel.update({bookName:bookName},{
            where:{
                bookName:"gül sarı"
            }
        })
return res.json(changeBook)
    } catch (err) {
        return res.json({message:err.message})
    }
}

//**** DELETE İŞLEMİ  ****/
const  delItem=async(req,res)=>{
    try {
        const id=req.params.id;
        await bookModel.destroy({where:{
            id:id
        }})
        return res.json();
    } catch (err) {
        return res.json({message:err.message})
    }
}





module.exports={
createOne,
bulkCreate,
find,
update,
delItem
}