const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})


router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workouts => res.json(workouts))
    .catch(err => console.error(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { items: req.body } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router