const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateList} = require("../middleware.js");

const ListingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
.get(wrapAsync(ListingController.index ))
.post(isLoggedIn,upload.single('listing[image]'),validateList,
   wrapAsync(ListingController.createlisting))
   
 //New Route
 router.get("/new" ,isLoggedIn, ListingController.renderNewForm)

router.route("/:id")   
.get( wrapAsync(ListingController.showlisting))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateList,
   wrapAsync(ListingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(ListingController.destroyListing));



 
 //Edit Route
 router.get("/:id/edit" ,isLoggedIn,isOwner,wrapAsync(ListingController.renderEditForm ))
 
 module.exports = router;