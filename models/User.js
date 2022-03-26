const { model, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: 'member',
    },
  },
  {
    timestamps: true,
  },
);

const User = model('User', userSchema);
module.exports = User;
