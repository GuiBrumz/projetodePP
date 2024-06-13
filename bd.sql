create database db_tasks;
use db_tasks;
create table tasks(
	id INT auto_increment primary key,
    title VARCHAR(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select*from tasks;

DELETE from tasks
where id > 0;
