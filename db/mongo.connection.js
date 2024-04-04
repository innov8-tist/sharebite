const mongoose = require("mongoose");

async function connectDb() {
    try {
        let connection = await mongoose.connect("mongodb+srv://innov8:innov8@innov8-charity.3r5zwx9.mongodb.net/");
        switch (connection.connection.readyState) {
            case 0: console.log(`Connection to database failed`); break;
            case 1: console.log(` to database successful`); break;
            case 2: console.log('Server is trying to connect to database'); break;
            case 3: console.log('Disconnecting from database'); break;

        }
        return connection;
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error
    }
}


module.exports = { connectDb };
