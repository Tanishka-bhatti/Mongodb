const {
  Schema,
  model
} = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50
    
  },
  age:{
    type: Number,
    required: true,
  },
  weight:{
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("test", userSchema)

module.exports = UserModel