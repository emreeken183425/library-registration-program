const express=require('express')
const router=express.Router();
const opCtrl=require('../controllers/bookController')




router.route('/create').post(opCtrl.createOne);

router.route('/bulkcreate').post(opCtrl.bulkCreate);

router.route('/find').get(opCtrl.find);


router.route('/update/:id').put(opCtrl.update);


router.route('/delete').delete(opCtrl.delItem);



module.exports=router