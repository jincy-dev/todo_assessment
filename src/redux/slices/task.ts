import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types';

const initialState: { tasks: Task[]; filter: 'all' | 'pending' | 'completed' } =
  {
    tasks: [],
    filter: 'all',
  };

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskList: (state, actions: PayloadAction<Task[]>) => {
      state.tasks = actions.payload;
    },
    setFilter: (
      state,
      actions: PayloadAction<'all' | 'pending' | 'completed'>
    ) => {
      state.filter = actions.payload;
    },
    addTask: (state, actions: PayloadAction<string>) => {
      const newTask = {
        id: Math.random(),
        title: actions.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, actions: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id !== actions.payload
      );
    },
    toggleTaskStatus: (state, actions: PayloadAction<number>) => {
      const selectedTask = state.tasks.find(
        (task) => task.id == actions.payload
      );
      if (selectedTask) {
        selectedTask.completed = !selectedTask.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskStatus, setTaskList, setFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
