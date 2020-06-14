const router = require('express').Router()
const { Workout } = require('../models')

// GET one workout
router.get('/workouts/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

// GET all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

// GET workouts in range
router.get('/workouts/range', (req, res) => {
  Workout.find()
    .then((workouts) => {
      req.json(workouts);
    })
    .catch(err => console.error(err))
})

// CREATE a workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

// UPDATE workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { items: req.body } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router