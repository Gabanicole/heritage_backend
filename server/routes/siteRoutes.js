const express = require ('express')
const router = express.Router();
const {getSites,createSite, getSite,updateSite,deleteSite} = require("../../controllers/siteController")

router.route( "/").get (getSites).post (createSite);

router.route( "/:id").get (getSite).put (updateSite).delete (deleteSite);



module.exports = router;