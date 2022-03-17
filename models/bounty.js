// importing mongoose
const mongoose = require("mongoose");

// create bounty schema
const bountySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 150,
            unique: true,
        },
        wantedFor: {
            type: String,
            required: true,
        },
        client: {
            type: String,
            required: true,
        },
        ship: String,
        reward: {
            type: Number,
            default: 10000,
        },
        captured: {
            type: Boolean,
            default: false,
        },
        lastSeen: String,
    },
    { timestamps: true }
);

// create the model
const Bounty = mongoose.model("Bounty", bountySchema);

// export the model
module.exports = Bounty;
