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

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async save(task: Task): Promise<void> {
    await this.taskRepository.save(task);
  }

  async setIsCompleted(id: number, isCompleted: boolean): Promise<void> {
    let task = await this.taskRepository.findOneOrFail(id);
    task.isCompleted = isCompleted;
    await this.taskRepository.save(task);
  }
}
