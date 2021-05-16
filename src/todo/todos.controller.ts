import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus} from '@nestjs/common';
import { IdsWrapper } from 'src/ids-wrapper';
import { ITodo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodosController {
    constructor(private todoService: TodoService) {

    }

    @Get()
    async findAll() : Promise<ITodo[]> {
        return this.todoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<ITodo> {
        var todo = await this.todoService.findOne(id);
        if (todo) {
            return todo;
        }

        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    @Post()
    createTodo(@Body() todo: ITodo) {
        return this.todoService.create(todo);
    }

    @Put(':id')
    async updateTodo(@Param('id') id: number, @Body() updatedTodo: ITodo) : Promise<ITodo> {
        var updated = await this.todoService.update(id, updatedTodo.done);

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
