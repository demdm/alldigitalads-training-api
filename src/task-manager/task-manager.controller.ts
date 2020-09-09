import {
  Controller,
  Delete,
  Get, Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { TaskManagerService } from './task-manager.service';
import { Task } from "./entities/task.entity";

@Controller('tasks')
export class TaskManagerController {
  constructor(private readonly taskManagerService: TaskManagerService) {}

  @Get()
  findAll() {
    return this.taskManagerService.findAll();
  }

  @Post()
  create(@Req() request: Request) {
    let task = new Task();
    ({
      title: task.title,
      isCompleted: task.isCompleted,
    } = request.body);

    return this.taskManagerService.save(task);
  }

  @Delete()
  delete(@Req() request: Request) {
    return this.taskManagerService.remove(request.body.id);
  }

  @Patch('make-completed')
  makeCompleted(@Req() request: Request) {
    return this.taskManagerService.setIsCompleted(request.body.id, true);
  }

  @Patch('make-uncompleted')
  makeUncompleted(@Req() request: Request) {
    return this.taskManagerService.setIsCompleted(request.body.id, false);
  }
}
