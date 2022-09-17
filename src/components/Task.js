import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, toDelete } from '../Redux/ToDoSlice';

const Task = ({ id, description, isDone }) => {
	const dispatch = useDispatch();

	const handleDone = () => {
		dispatch(toggleDone({ id: id, isDone: !isDone }));
	};

	const handleDelte = () => {
		dispatch(toDelete({ id: id }));
	};
	// const handleEdit = () => {
	// 	dispatch();
	// };

	return (
		<li className={`list-group-item ${isDone && 'list-group-item-success'}`}>
			<div className="d-flex justify-content-between">
				<span className="d-flex align-items-center">
					<input
						type="checkbox"
						className="mr-4"
						checked={isDone}
						onChange={handleDone}
					></input>
					{description}
				</span>
				{/* <button className="btn btn-dark" onClick={handleEdit}>
					Editer
				</button> */}
				<button className="btn btn-danger" onClick={handleDelte}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Task;
