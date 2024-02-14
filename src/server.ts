import express from "express";
import http from 'http';
import bodyParser from "body-parser";
import cors from "cors";
import compression from 'compression';
import mongoose, { Promise, mongo } from "mongoose";
import todoRoutes from './routes/todo.routes';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json);

const server = http.createServer(app);


server.listen(8080, () =>{
    console.log('server is runnig on 8000 port')
})


const MONGO_URL = 'mongodb+srv://mrymrghb82:todoList@todo-v1.rlooada.mongodb.net/?retryWrites=true&w=majority';
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));




//S1
// class App{
//     public app: express.Application;
//     public mongoUrl: string = 'mongodb://localhost:27017/todo';

//     constructor(){
//         this.app = express();
//         this.config();
//         this.mongoSetup();
//         this.routes();
//     }

//     private config(): void{
//         this.app.use(bodyParser.json());
//         this.app.use(bodyParser.urlencoded({extended: false}));
//     }

//     private mongoSetup(): void{
//         mongoose.Promise = global.Promise;
//         mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true});
//     }

//     private routes(): void{
//         const router = express.Router();
//         this.app.use('./api', new todoRoutes().getRoutes());
//     }
// }

// const PORT = 3000;
// const app = new App().app;

// app.listen(PORT, ()=>{
//     console.log(`Server is ruuning on port  &{PORT}`);
// });