import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskManagerService {
  constructor(
      @InjectRepository(Task)
      private taskRepository: Repository<Task>,
      private connection: Connection,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async save(task: Task): Promise<void> {
    await this.connection.transaction(async manager => {
      await manager.save(task);
    });
  }
}
