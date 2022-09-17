import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';
// import filter from './Redux/ToDoSlice';
const App = () => {
	const todos = useSelector((state) => state.todos);
	// const filter = useSelector((state) => state.filter);
	return (
		<div className="container  p-4 mt-5">
			<h1>My Todo Task</h1>
			<Addtask />
			<ListTask />
			<Filter id={todos.id} />
		</div>
	);
};

export default App;
