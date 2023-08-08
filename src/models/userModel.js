const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
  Name: String,
    Email: String,
    Password:{type:String,require:true},
    mobileNo:Number,
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("user",UserSchema);
