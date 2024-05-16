import { TodoDTO } from '../dto/todo.dto';
import Todo from '../entity/todo.entity';

export default {
    async getOne(id: number) {
        return await Todo.findOne({ where: { id } });
    },
    async getAll() {
        return await Todo.findAll()
    },
    async create(todo: TodoDTO) {
        return await Todo.create({ title: todo.title, description: todo.description })
    },
    async update(id: number, todo: TodoDTO) {
        return await Todo.update({ title: todo.title, description: todo.description }, { where: { id } })
    },
    async delete(id: number) {
        return await Todo.destroy({ where: { id } });
    }
}