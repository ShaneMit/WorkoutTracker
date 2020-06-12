module.exports = require('mongoose').connect('mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
