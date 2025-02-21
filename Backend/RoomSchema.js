const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    title:String,
    room_description:String,
    address: String,
    room_type: String,
    rent_price: Number,
    images: [String], // Store image URLs
    parking: String,
    available_for: String,
    owner_contact: String,
    rules: String,
    water_and_electricity_supply:String,
    room_upload_data:String,
    lattitude:Number,
    longitude:Number,
    room_size:Number,
    deposite:Number,
});

module.exports = mongoose.model("Room", RoomSchema);
