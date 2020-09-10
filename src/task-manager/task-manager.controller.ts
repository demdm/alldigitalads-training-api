import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  create(@Body('title') title: string) {
    return this.taskManagerService.save(title);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.taskManagerService.remove(id);
  }

  @Patch(':id')
  update(
      @Param('id') id: number,
      @Body('isCompleted') isCompleted: boolean,
  ) {
    return this.taskManagerService.changeCompletion(id, isCompleted);
  }
}
