const router = require('express').Router()
const { getTasks, addTask, toggleTask, updateTask, deleteTask } = require('../controllers/taskController')

router.get('/', getTasks)
router.post('/register', addTask)
router.put('/toggle/:id', toggleTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
