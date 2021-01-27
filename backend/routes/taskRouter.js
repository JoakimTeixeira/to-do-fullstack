const router = require('express').Router()
const { addTask, toggleTask, updateTask, deleteTask } = require('../controllers/taskController')

router.post('/register', addTask)
router.put('/toggle/:id', toggleTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
