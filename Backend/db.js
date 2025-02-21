const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const url = "mongodb+srv://sayyadanis356:anis123@cluster0.zt73u.mongodb.net/OrdersDB?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(url)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("Failed to connect:", err));
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
