import { EntitySchema } from 'typeorm';
import { Task } from '../entities/task.entity';

export const TaskSchema = new EntitySchema<Task>({
    name: 'Task',
    target: Task,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        title: {
            type: String,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
    },
});
