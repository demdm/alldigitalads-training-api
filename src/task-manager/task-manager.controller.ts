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

  @Post() // create or update
  create(@Req() request: Request) {
    let task = new Task();
    if (request.body.id) {
      task.id = request.body.id;
    }
    task.title = request.body.title;
    task.isCompleted = request.body.isCompleted;

    return this.taskManagerService.save(task);
  }

  @Delete()
  delete(@Req() request: Request) {
    return this.taskManagerService.remove(request.body.id);
  }

  // @Patch
  // makeCompleted(id: number): Promise<void> {
  //   let task = this.taskManagerService.findOne(id);
  //   task.isCompleted = true;
  //   return this.taskManagerService.save(task);
  // }
  //
  // @Patch
  // makeUncompleted(id: number): Promise<void> {
  //   let task = this.taskManagerService.findOne(id);
  //   task.isCompleted = false;
  //   return this.taskManagerService.save(task);
  // }
}
