const { Schema, model } = require('mongoose')

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [{
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: false
  },
  reps: {
    type: Number,
    required: false
  },
  sets: {
    type: Number,
    required: false
  },
  distance: {
    type: Number,
    required: false
  }
  }],
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

workoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, exercise) => total + exercise.duration, 0)
})

module.exports = model('Workout', workoutSchema)