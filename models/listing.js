const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: {
      url: {
        type: String,
        default: "https://images.unsplash.com/photo-1744916577205-cb1ada826b3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) =>
          v === ""
            ? "https://images.unsplash.com/photo-1744916577205-cb1ada826b3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : v,
      },
      path: String, // optional: can leave this blank or add default if needed
    },
    price: Number,
    location: String,
    country: String,
  });
  
  
  const Listing = mongoose.model("Listing", listingSchema);
  module.exports = Listing;

// const listingSchema = new Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description: String,
//     image:{
//         type:Object,
//         default:"https://images.unsplash.com/photo-1744916577205-cb1ada826b3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         set:(v) => 
//         v === "" 
//             ? "https://images.unsplash.com/photo-1744916577205-cb1ada826b3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//             : v,
//     },
//     price:Number,
//     location:String,
//     country:String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description: String,
//     image:{
//         type:String,
//         default:"https://images.unsplash.com/photo-1744916577205-cb1ada826b3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         set:(v) => 
//         v === "" 
//             ? "https://images.unsplash.com/photo-1744916577205-cb1ada826b3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//             : v,
//     },
//     price:Number,
//     location:String,
//     country:String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;