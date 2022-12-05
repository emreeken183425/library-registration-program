const bookModel = require("../models/books-models");


//**** POST İŞLEMİ  ****/
const createBook=async(req,res)=>{
    try {
        const {bookName,author,category,publisher}=req.body;
        const newBook=await bookModel.createBook({
            bookName,
            author,
            category,
            publisher

        })

    } catch (error) {
        
    }
}



//**** BİRDEN FAZLA POST İŞLEMİ  ****/
const  bulkCreateBook=async(req,res)=>{
    try {
        const newBooks=await bookModel.bulkCreateBook(req.body);
        return res.status(201).json(newBooks)


    } catch (err) {
        return res.json({message:err.message})
    }
}

//**** GET İŞLEMİ  ****/
const  findBook=async(req,res)=>{
    try {
        const book=await bookModel.findAll();
        return res.json(user)


    } catch (err) {
        return res.json({message:err.message})
    }
}

//**** PUT/UPDATE İŞLEMİ  ****/
const  updateBook=async(req,res)=>{
    try {
        const {bookName,author,category,publisher}=req.body;
       const changeBook= await bookModel.updateBook({bookName:bookName,author:author,category:category,publisher:publisher},{
            where:{
                bookName:"gül sarı",
                author:"geroge orwell",
                category:"historical",
                publisher:"Yk"
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
createBook,
bulkCreateBook,
findBook,
updateBook,
delItem
}