import { Request, Response } from "express";
import Todo, {ITodo} from '../models/todo.model';
import { promises } from "dns";


//S2
const getTodos = async (req:Request, res:Response): Promise<void> =>{
    try{
        const todoList = await Todo.find()
        res.status(200).json({todoList})
    } catch (error) {
        throw error
    }
}


const addTodo = async (req:Request, res:Response): Promise<void> =>{
    try{
        const body = req.body as Pick <ITodo, "taskTitle" | "teskDetailes" | "done">

        const todo: ITodo = new Todo ({
            taskTitle: body.taskTitle,
            teskDetailes: body.teskDetailes,
            done: body.done,
        })

        const newTodo = await todo.save()
        const allTodos = await Todo.find()

        res
        .status(201)
        .json({message: "Todo Added", todo: newTodo , todos: allTodos})
    } catch (error) {
        throw error
    }
}



const updateTodo = async (req:Request, res:Response): Promise<void> =>{
    try{
        const{
            params: {id},
            body,
        } = req
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
            {_id: id},
            body
        )
        const allTodos = await Todo.find()
        res.status(200).json({
            message: "todo Update",
            todo: updateTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
}




const deleteTodo = async (req:Request, res:Response): Promise<void> =>{
    try{
        const updateTodo: ITodo | null = await Todo.findByIdAndDelete(
           req.params.id
        )
        const allTodos = await Todo.find()
        res.status(200).json({
            message: "todo deleted",
            todo: deleteTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
}


export {getTodos , addTodo , updateTodo, deleteTodo} 


// //S1
// export default class todoController {
//     public createTodo(req:Request , res: Response): void{
//         const newTodo = new Todo(req.body);


//         newTodo.save((err, todo) => {
//             if(err){
//                 res.status(400).json(err);
//             } else {
//                 res.json(todo);
//             }
//         });
//     }


    // public getTodos(req:Request, res:Response): void{
    //     Todo.find({}, (err, todos) => {
    //         if (err){
    //             res.status(400).json(err);
    //         } else {
    //             res.json(todos);
    //         }
    //     });
    // }



//     public getTodoById(req:Request, res:Response): void{
//         Todo.findById(req.params.id, (err, todo) => {
//             if(err) {
//                 res.status(400).json(err);
//             } else {
//                 res.json(todo);
//             }
//         });
//     }


//     public updateTodo(req:Request, res:Response): void{
//         Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, todo) =>{
//             if(err){
//                 res.status(400).json(err);
//             } else {
//                 res.json(todo);
//             }
//         });
//     }


//     public deleteTodo (req:Request, res: Response): void{
//         Todo.findByIdAndDelete(req.params.id, (err, todo) => {
//             if(err){
//                 res.status(400).json(err);
//             } else {
//                 res.json(todo);
//             }
//         });
//     }
// }