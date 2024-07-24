import mongoose from "mongoose";
import app from "./app.js";
import { log } from "handlebars";


( async () => {
try {
    await mongoose.connect("mongodb://localhost:27017/gitsetup")
    console.log("DB CONNECTED");

    const onListening = () => {
        console.log("Listening on PORT 1222");
    }
    
    app.listen(1222, onListening)

    } catch (error) {
    console.error("error: ", error);
    throw err;
}
})()