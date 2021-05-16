import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { Todo } from "./todo.entity";

@EventSubscriber()
export class TodoSubscriber implements EntitySubscriberInterface<Todo> {

    constructor(connection: Connection) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return Todo;
    }

    beforeInsert(event: InsertEvent<Todo>) {
        event.entity.created = new Date();
        event.entity.updated = event.entity.created;
    }

    beforeUpdate(event: UpdateEvent<Todo>) {
        event.entity.updated = new Date();
    }
}
