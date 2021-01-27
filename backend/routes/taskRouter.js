const router = require('express').Router()
const { addTask } = require('../controllers/taskController')

router.post('/register', addTask)

module.exports = router
