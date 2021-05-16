import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ITodo } from './todo.interface';

@Entity()
export class Todo implements ITodo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    done: boolean;

    @Column()
    created: Date;

    @Column()
    updated: Date;
}
