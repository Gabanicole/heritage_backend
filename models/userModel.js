const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
   name:{
    type: String,
    required:[true, "please add the name"]
   },
   email:{
    type: String,
    required:[true, "please add the user email address"],
    unique: [true, "Email adress already taken"]
   },
   password:{
    type: String,
    required:[true, "please add the user password"]
   },
   roles: 
      {
        type:String,
        enum:[''],
        default:'guest'
      }
},{
 timestamps:true,
}
);
module.exports = mongoose.model("User", userSchema)