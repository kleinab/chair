var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var sharingSchema = new Schema({
  users: {
    type: [{
      type: ObjectId,
      ref: 'User'
    }],
    validate: [arrayLimit, '{PATH} can be no longer than 2']
  },
  answers: {
    type: [{
      type: ObjectId,
      ref: 'Answer'
    }],
    validate: [arrayLimit, '{PATH} can be no longer than 2']
  },
  question_id: { type: ObjectId, ref: 'Question' },
  created_at: { type: Date }
})

function arrayLimit(arr) {
  return arr.length <= 2;
}

module.exports = mongoose.model('Sharing', sharingSchema);
