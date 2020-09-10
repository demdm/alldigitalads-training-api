import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskManagerService {
  constructor(
      @InjectRepository(Task)
      private taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository
        .createQueryBuilder()
        .addOrderBy('id', 'ASC')
        .getMany();
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async save(title: string): Promise<void> {
    let task = new Task();
    task.title = title;
    task.isCompleted = false;

    await this.taskRepository.save(task);
  }

  async changeCompletion(id: number, isCompleted: boolean): Promise<void> {
    let task = await this.taskRepository.findOneOrFail(id);
    task.isCompleted = isCompleted;
    await this.taskRepository.save(task);
  }
}
