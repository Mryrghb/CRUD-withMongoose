import express , {Router} from "express";
import {getTodos , addTodo , updateTodo, deleteTodo} from '../controllers/todo.controller';

const router: Router = Router();


router.post("add", addTodo);
router.get("/todos", getTodos);
router.put("/update/:id",updateTodo);
router.delete("/delete/:id",deleteTodo);

export default router

//S1
// import todoController from '../controllers/todo.controller';


// export class todoRoutes {
//     private router: Router = express.Router();
//     private todoController: todoController = new todoController();


//     constructor(){
//         this.config();
//     }

//     private config(): void{

//         this.router.post('/todos', this.todoController.createTodo);
//         this.router.get('/todos', this.todoController.getTodos);
//         this.router.get('/todos/:id', this.todoController.getTodoById);
//         this.router.put('/todos/:id', this.todoController.updateTodo);
//         this.router.delete('/todos/:id', this.todoController.deleteTodo);
//     }

//     public getRoutes(): Router{
//         return this.router;
//     }
// }