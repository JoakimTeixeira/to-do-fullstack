const router = require('express').Router()
const { addTask, toggleTask, updateTask } = require('../controllers/taskController')

router.post('/register', addTask)
router.put('/toggle/:id', toggleTask)
router.put('/:id', updateTask)

module.exports = router
