const express=require('express')
const router=express.Router()
const opCtrl=require('../controllers/bookController')
const auCtrl=require('../controllers/authorControllers')
const caCtrl=require('../controllers/categoryControllers')
const puCtrl=require('../controllers/publisherControllers')

//*****************BOOK   *****************/
//*** post işlemi   ****/
router.route('/book').post(opCtrl.createOne);
router.route('/books').post(opCtrl.bulkCreate);


//*** get işlemi   ****/
router.route('/getbook').get(opCtrl.find);

//*** put/update işlemi   ****/
router.route('/updatebook/:id').put(opCtrl.update);

//*** delete işlemi   ****/
router.route('/delete/:id').delete(opCtrl.delItem);

//*****************AUTHOR   *****************/
//*** post işlemi   ****/
router.route('/author').post(auCtrl.createOne);
router.route('/authors').post(auCtrl.bulkCreate);


//*** get işlemi   ****/
router.route('/getauthor').get(auCtrl.find);

//*** put/update işlemi   ****/
router.route('/updateauthor/:id').put(auCtrl.update);

//*** delete işlemi   ****/
router.route('/delete/:id').delete(auCtrl.delItem);


//*****************CATEGORY   *****************/
//*** post işlemi   ****/
router.route('/category').post(caCtrl.createOne);
router.route('/categorys').post(caCtrl.bulkCreate);


//*** get işlemi   ****/
router.route('/getcategory').get(caCtrl.find);

//*** put/update işlemi   ****/
router.route('/updatecategory/:id').put(caCtrl.update);

//*** delete işlemi   ****/
router.route('/delete/:id').delete(caCtrl.delItem);

//*****************PUBLİSHER   *****************/
//*** post işlemi   ****/
router.route('/publisher').post(puCtrl.createOne);
router.route('/publishers').post(puCtrl.bulkCreate);


//*** get işlemi   ****/
router.route('/getpublisher').get(puCtrl.find);

//*** put/update işlemi   ****/
router.route('/updatepublisher/:id').put(puCtrl.update);

//*** delete işlemi   ****/
router.route('/delete/:id').delete(puCtrl.delItem);



module.exports=router;