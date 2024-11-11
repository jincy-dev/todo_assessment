import { useSelector } from 'react-redux';
import { selectTask } from '../redux/slices/selectors';
import NoTasks from './NoTasks';
import ScrollablleList from './ScrollablleList';
import useData from '../hooks/useData';

const TaskList = () => {
  const tasklist = useSelector(selectTask);

  const { loading } = useData();
  if (loading) {
    return (
      <div className='flex flex-col grow min-w-[520px] items-center justify-center border rounded-xl mb-12'>
        <span className='text-xl p-6'>Loading...</span>
      </div>
    );
  }
  return (
    <div className='flex flex-col grow min-w-[520px] items-center justify-center border rounded-xl mb-12'>
      {tasklist.length ? <ScrollablleList tasks={tasklist} /> : <NoTasks />}
    </div>
  );
};

export default TaskList;
