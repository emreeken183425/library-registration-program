const express=require('express')
const router=express.Router();
const bookCtrl=require('../controllers/bookController')




router.route('/create').post(bookCtrl.createBook);

router.route('/bulkcreate').post(bookCtrl.bulkCreateBook);

router.route('/find').get(bookCtrl.findBook);


router.route('/update/:id').put(bookCtrl.updateBook);


router.route('/delete').delete(bookCtrl.delItem);



module.exports=router