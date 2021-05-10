import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus} from '@nestjs/common';
import { IdsWrapper } from 'src/ids-wrapper';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodosController {
    constructor(private todoService: TodoService) {

    }

    @Get()
    findAll() : Array<any> {
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) : Todo {
        var todo = this.todoService.findOne(id);
        if (todo) {
            return todo;
        }

        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    @Post()
    createTodo(@Body() todo: Todo) {
        return this.todoService.create(todo);
    }

    @Put(':id')
    updateTodo(@Param('id') id: number, @Body() updatedTodo: Todo) : Todo {
        var updated = this.todoService.update(id, updatedTodo.done);

        if (updated) {
            return updated;
        }

        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    @Delete()
    
    removeTodos(@Body() idsWrapper: IdsWrapper) {
        if (idsWrapper === undefined || idsWrapper.ids === undefined) {
            throw new HttpException('Invalid request', HttpStatus.EXPECTATION_FAILED);
        }

        this.todoService.removeTodos(idsWrapper.ids);
    }
}
