const express = require('express');
const likeProductController = require('../Controller/likeProduct');
const router = express.Router();

router.put('/list', likeProductController.post_likeList);
router.get('/list/:Id', likeProductController.get_likeList);
router.delete('/list/:Id', likeProductController.delete_likeList);
router.patch('/product/:Id',likeProductController.post_ProductLikeList);
router.delete('/product/:Id',likeProductController.delete_ProductLikeList);

module.exports = router;