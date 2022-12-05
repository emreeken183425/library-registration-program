const express=require('express')
const router=express.Router()
const opCtrl=require('../controllers/bookController')

//*** post işlemi   ****/
router.route('/newbook').post(opCtrl.createOne);
router.route('/books').post(opCtrl.bulkCreate);


//*** get işlemi   ****/
router.route('/book').get(opCtrl.find);

//*** put/update işlemi   ****/
router.route('/book/:id').put(opCtrl.update);

//*** delete işlemi   ****/
router.route('/delete/:id').delete(opCtrl.delItem);





module.exports=router;