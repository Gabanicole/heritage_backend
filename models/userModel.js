const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
      unique: [true, "Username alreday used"]
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
      role: {
        type: String,
        default: guest,
        enum: ["guest", "elders", "agent1","agent2","agent3","manager", "admin"],
      }, 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);