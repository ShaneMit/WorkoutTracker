const router = require('express').Router()
const { Workouts } = require('../models')

router.get('/workouts/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// router.get('/users/un/:username', (req, res) => {
//   User.find({ username: req.params.username })
//     .then(users => res.json(users[0]))
//     .catch(err => console.error(err))
// })

router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { items: req.body } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router