import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { ITodo } from './todo.interface';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {

    }

    create (todo: ITodo) : Promise<ITodo> {
        return this.todoRepository.save(todo);
    }

    findAll () : Promise<ITodo[]> {
        return this.todoRepository.find();
    }

    findOne(id: number) : Promise<ITodo> {
        return this.findOne(id);
    }

    async update(id: number, done: boolean) : Promise<ITodo> {
        const result = await this.todoRepository.createQueryBuilder().update().set({done: done}).whereInIds(id).execute();
        return this.todoRepository.findOne(id);
    }

    async removeTodos(ids: number[]) : Promise<DeleteResult> {
        return this.todoRepository.createQueryBuilder().delete().whereInIds(ids).execute();
    }
}
