const Task = require('../models/taskModel')

const addTask = async (req, res, next) => {
  try {
    const { title, description, isFinished } = req.body

    if (!title || !description || isFinished === undefined) {
      return res.status(400).json({ msg: 'A field was not entered' })
    }

    if (isFinished !== undefined) {
      if (typeof isFinished !== 'boolean') {
        return res.status(400).json({ msg: 'Finished task field must be of type boolean' })
      }
    }

    // Create new task
    const newTask = new Task({
      title,
      description,
      isFinished
    })

    const savedTask = await newTask.save()
    res.json(savedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  addTask
}