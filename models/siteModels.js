const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({
  name:{
    type: String,
    required:[true, "Please int site title"],
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
    timestamps:true,
  }
);

module.exports = mongoose.model("Site", siteSchema);