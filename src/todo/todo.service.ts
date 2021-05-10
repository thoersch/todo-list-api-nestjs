import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
    private todos: Todo[] = [];

    create (todo: Todo) : Todo {
        if (this.todos.length === 0) {
            todo.id = 1;
        } else {
            var accumulator = (a,b) => a.id > b.id ? a.id : b.id;
            todo.id = this.todos.reduce(accumulator).id + 1;
        }
        
        todo.created = new Date();
        this.todos.push(todo);
        return todo;
    }

    findAll () : Todo[] {
        return this.todos;
    }

    findOne(id: number) : Todo {
        return this.todos.find(t => t.id == id);
    }

    update(id: number, done: boolean) : Todo {
        var todo = this.todos.find(t => t.id == id);
        if (todo) {
            todo.done = done;
        }
        return todo;
    }

    removeTodos(ids: number[]) {
        this.todos = this.todos.filter(t => !ids.includes(t.id));
    }
}
