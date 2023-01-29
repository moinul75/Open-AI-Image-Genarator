const express = require('express')
const router = express.Router();
const {genarateImage} = require('../controller/controller');



//connect the oepnai 
router.post('/genarateimage',genarateImage)






module.exports = router;