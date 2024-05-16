import { Sequelize } from 'sequelize-typescript';
import Todo from './entity/todo.entity';
import { DB, DB_PASSWORD, DB_USER } from './config';

export default function db() {
    const sequelize = new Sequelize({
        database: DB,
        dialect:  'postgres',
        username: DB_USER,
        password: DB_PASSWORD,
        models: [Todo],
      });
      
    sequelize.authenticate().then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the Database:", err);
    });

    return sequelize
}