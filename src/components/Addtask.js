import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/ToDoSlice';

const Addtask = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTask({ description: value }));
	};

	return (
		<Form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
			{/* <Form.Label className="sr-only">Name</Form.Label> */}
			<input
				type="text"
				className="form-control mb-2 mr-sm-2"
				placeholder="Add todo..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<Button type="submit" className="btn btn-primary mb-2">
				Submit
			</Button>
		</Form>
	);
};

export default Addtask;
