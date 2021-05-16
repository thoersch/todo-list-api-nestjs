import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { TodoSubscriber } from './todo.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo])
  ],
  controllers: [TodosController],
  providers: [TodoService, TodoSubscriber]
})
export class TodoModule {}
