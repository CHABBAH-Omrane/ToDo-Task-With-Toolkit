import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
	const todos = useSelector((state) => state.todos);
	// const todos = [
	// 	{ id: 1, description: 'Create and Manage Applications', isDone: true },
	// 	{ id: 2, description: 'Develop Dynamic Processes', isDone: false },
	// 	{ id: 3, description: 'Integrate Documents', isDone: true },
	// ];

	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<Task
					id={todo.id}
					description={todo.description}
					isDone={todo.isDone}
					upDate={todo.upDate}
				/>
			))}
		</ul>
	);
};

export default ListTask;
