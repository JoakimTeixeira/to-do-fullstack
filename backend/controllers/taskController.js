const Task = require('../models/taskModel')

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({})

    const newTasks = tasks.map((task) => {
      return {
        id: task._id,
        title: task.title,
        description: task.description,
        isFinished: task.isFinished
      }
    })

    res.json(newTasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

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

const toggleTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const { isFinished } = req.body

    // Update isFinished field
    const updatedTask = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: { isFinished }
      }, { new: true }
    )

    if (!updatedTask) {
      return res.status(400).json({ msg: 'This task was not found' })
    }

    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const { description } = req.body

    // Update description field
    const updatedTask = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: { description }
      }, { new: true }
    )

    if (!updatedTask) {
      return res.status(400).json({ msg: 'This task was not found' })
    }

    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params

    const deletedTask = await Task.findByIdAndDelete(id)

    if (!deletedTask) {
      return res.status(400).json({ msg: 'This task was not found' })
    }

    res.json(deletedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  updateTask,
  deleteTask
}
