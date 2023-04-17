const asyncHandler = require ("express-async-handler");
const  Site = require("../models/siteModels");


//Get all sites
const getSites = asyncHandler(async(req,res) => {
  const sites = await User.find();
  res.status(200).json(sites);
});


//create site
const createSite = asyncHandler(async (req,res) => {
  console.log("the request body is :",req.body);
  const {name,image,content} = req.body;
  if( !name || !image ||!content){
    res.status(400);
    throw new Error (" all fields are mandatory")
  }
  const site = await Site.create({
    name,
    image,
    content,
    
  });

  res.status(201).json(site);
});

//get info of one site
const getSite = asyncHandler(async(req,res) => {
  const site = await Sites.findById(req.params.id);
  if(!site){
    res.status(404);
    throw new Error(" site not found")
  }
  res.status(201).json(site);
});


//update site
const updateSite = asyncHandler(async(req,res) => {
  const site = await Site.findById(req.params.id);
  if(!site) {
    res.status(404);
    throw new error("site not found");
  }
  const updatedSite = await Site.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  res.status(200).json(updatedSite);
});

//delete user
const deleteSite = asyncHandler(async (req,res) => {
  const site = await Site.findById(req.params.id);
  if(!site) {
    res.status(404);
    throw new error("site not found");
  }
  await Site.remove();
  res.status(200).json(user);
  
});
module.exports = {getSites, createSite, getSite, updateSite, deleteSite};
