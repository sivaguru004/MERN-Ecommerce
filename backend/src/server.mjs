import app from "./app.mjs";
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`app is listening on "localhost:${PORT}"`);
})