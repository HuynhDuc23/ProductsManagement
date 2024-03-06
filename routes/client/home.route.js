const express = require('express');
const router = express.Router();
// Trả về đối tượng router
router.get('/',(req , res)=>{
    res.render('client/pages/home/index.pug')
})
module.exports = router ;