import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
	name: 'todos',
	initialState: [
		{
			id: 1,
			description: 'Create and Manage Applications',
			isDone: true,
			upDate: false,
		},
		{
			id: 2,
			description: 'Develop Dynamic Processes',
			isDone: false,
			upDate: false,
		},
	],
	reducers: {
		addTask: (state, action) => {
			const newToDo = {
				id: Date.now(),
				description: action.payload.description,
				isDone: false,
				upDate: false,
			};
			state.push(newToDo);
		},

		toggleDone: (state, action) => {
			const index = state.findIndex((todos) => todos.id === action.payload.id);
			state[index].isDone = action.payload.isDone;
		},

		toDelete: (state, action) => {
			return state.filter((todos) => todos.id !== action.payload.id);
		},

		doneTsck: (state, action) => {
			return state.filter((todos) => todos.isDone === true);
		},

		notDoneTsck: (state, action) => {
			return state.filter((todos) => todos.isDone === false);
		},

		filter: (state, action) => {
			return state;
		},
	},
});

export const {
	addTask,
	toggleDone,
	toDelete,
	doneTsck,
	notDoneTsck,
	filter,
	todos,
} = todoSlice.actions;

export default todoSlice.reducer;
