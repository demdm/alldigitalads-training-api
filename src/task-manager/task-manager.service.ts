import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskManagerService {
  private tasks: Task[] = [
    {
      id: 'A-1',
      title: 'learn GIT',
      isCompleted: true
    },
    {
      id: 'A-2',
      title: 'learn ES',
      isCompleted: false
    },
    {
      id: 'A-3',
      title: 'learn PHP',
      isCompleted: true
    },
  ];

  findAll() {
    return this.tasks;
  }
}
