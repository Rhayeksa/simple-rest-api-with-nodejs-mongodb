const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  identityNumber: {
    type: String,
  },
});

const Users = mongoose.model("users", UserSchema);
module.exports = Users;
