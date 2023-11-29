import express  from 'express'
import {router} from './routers/router.js'


const app = express();
app.use(express.json());


app.use("/api", router);

app.listen(5000, ()=> {
    console.log("server is runing on port  5000");
});
