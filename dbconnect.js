const mongoose = require('mongoose');
const uri = "mongodb+srv://kimleng1z:user1@midterm.hniszn4.mongodb.net/?retryWrites=true&w=majority&appName=midterm";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

module.exports= mongoose;

