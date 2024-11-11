import { FC, useEffect, useState } from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/slices/selectors';

const ScrollablleList: FC<{ tasks: Task[] }> = ({ tasks }) => {
  const [data, setData] = useState(tasks);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (filter === 'all') setData(tasks);
    if (filter === 'pending')
      setData(tasks.filter((item) => item.completed === false));
    if (filter === 'completed')
      setData(tasks.filter((item) => item.completed === true));
  }, [tasks, filter]);

  return (
    <div className='overflow-y-auto max-h-[720px] flex flex-col grow w-full items-start'>
      {data.map((item) => (
        <TaskItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default ScrollablleList;
