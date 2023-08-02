const express = require('express')
const router = express.Router()
const {getAll,getOne,createClassTest,updateClassTest,deleteClassTest} = require('../controllers/class-test')

router.route('/').get(getAll).post(createClassTest)
router.route('/:id').get(getOne).patch(updateClassTest).delete(deleteClassTest)

module.exports = router; 