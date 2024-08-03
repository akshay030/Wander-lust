const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

// const initDB = async () => {
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({
//         ...obj,
//         owner: "66aa4ea4cf2fa3fae068e6e5",
//         image: obj.image.url // Make sure image is set to the URL string
//     }));
//     await Listing.insertMany(initData.data);
//     console.log("Data was Initialized");
// }

// initDB();

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "66aa4ea4cf2fa3fae068e6e5", }));
    await Listing.insertMany(initData.data)
    console.log("data was initialized ...");
 }
 
 initDB();