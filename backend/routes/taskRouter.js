const router = require('express').Router()
const { addTask, toggleTask } = require('../controllers/taskController')

router.post('/register', addTask)
router.put('/toggle/:id', toggleTask)

module.exports = router
