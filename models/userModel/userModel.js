const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  passwordHash: { type: String, required: true },

  phone: { type: Number},
  address: { type: String},

  total_points: { type: Number},
  Watchgroup:[{content_id: Number,
              content_name: String,
              schedule_date: Date,
                        }]
  
});

const User = mongoose.model("user", userSchema);

module.exports = User;
