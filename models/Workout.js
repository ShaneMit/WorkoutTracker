const { Schema, model } = require('mongoose')

const workoutSchema = new Schema({
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

}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

workoutSchema.virtual('totalTime').get(function () {
  return this.items.reduce((t, item) => t + item.time, 0)
})

module.exports = model('Workout', workoutSchema)