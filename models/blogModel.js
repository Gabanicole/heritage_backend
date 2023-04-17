const mongoose = require('mongoose');

const blogSchema = mongoose.schema({
   title:{
       type: String,
       required: "please enter your title",
   },
    image:{
    type: String,
    required:[true, "Please add site image"],
  },
  content:{
    type: String,
    required:[true, "Please add your content "],
  },
},
  {
    timestamps: true,
  }
    
);

module.exports = mongoose.model("Blog", blogSchema);
