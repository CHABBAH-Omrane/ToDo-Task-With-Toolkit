import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { doneTsck, notDoneTsck } from '../Redux/ToDoSlice';

const Filter = ({ id }) => {
	const dispatch = useDispatch();

	const handleDone = () => {
		dispatch(doneTsck({ id: id }));
	};
	const handleNotDone = () => {
		dispatch(notDoneTsck({ id: id }));
	};

	return (
		<div>
			<h4 className="mt-3">Filter Task</h4>
			<div className="mb-2">
				{/* <Button
					type="submit"
					className="btn btn-dark mr-3 mb-2"
					// onClick={}
				>
					All Task
				</Button> */}
				<Button
					type="submit"
					className="btn btn-success mr-3 mb-2"
					onClick={handleDone}
				>
					Done
				</Button>
				<Button
					type="submit"
					className="btn btn-warning  mb-2"
					onClick={handleNotDone}
				>
					Not Done{' '}
				</Button>
			</div>
		</div>
	);
};

export default Filter;
