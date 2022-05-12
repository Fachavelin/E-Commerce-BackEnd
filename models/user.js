const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
});

UserSchema.methods.toJSON = function () {
  const { ...data } = this.toObject();
  return data;
};

module.exports = model('User', UserSchema);
