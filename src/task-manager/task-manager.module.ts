import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskManagerService } from './task-manager.service';
import { TaskManagerController } from './task-manager.controller';
import { TaskSchema } from "./entity-schemas/task.schema";

@Module({
  imports: [TypeOrmModule.forFeature([TaskSchema])],
  exports: [TypeOrmModule],
  controllers: [TaskManagerController],
  providers: [TaskManagerService]
})
export class TaskManagerModule {}
