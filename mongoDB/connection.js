import mongoose from "mongoose";
const mongoDBConnect = () => {
  try {
    mongoose.connect('mongodb+srv://rk2505152:user123@cluster0.xvscmpg.mongodb.net/chatweb', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB - Connected");
  } catch (error) {
    console.log("Error - MongoDB Connection " + error);
  }
};
export default mongoDBConnect;
