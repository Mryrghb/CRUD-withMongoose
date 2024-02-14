import mongoose, {Schema, Document} from "mongoose";


export interface ITodo extends Document{
    taskTitle: string;
    teskDetailes: string;
    done: boolean;
}

const todoSchema: Schema = new Schema({
    taskTitle: {type: String, required: true},
    teskDetailes: {type: String, required: true},
    done: {type: Boolean, default: false},
});

export default mongoose.model<ITodo>('Todo', todoSchema);