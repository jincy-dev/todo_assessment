import { RootState } from '../store';

export const selectTask = (state: RootState) => state.task.tasks;
export const selectFilter = (state: RootState) => state.task.filter;
