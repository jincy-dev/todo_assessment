import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../redux/slices/task';

const useTask = (id: number) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTask(id));
  };

  const onToggle = () => {
    dispatch(toggleTaskStatus(id));
  };

  return { onDelete, onToggle };
};

export default useTask;
