import useTask from '../hooks/useTask';

type Props = {
  title: string;
  id: number;
  completed: boolean;
};

const TaskItem = ({ title, id, completed = false }: Props) => {
  const { onDelete, onToggle } = useTask(id);
  return (
    <div
      className='flex h-min border-b items-center  w-full p-2 gap-6'
      key={id}
    >
      <div className='flex items-center flex-center'>
        <input
          type='checkbox'
          checked={completed}
          className='h-6 bg-red-400 w-6'
          onChange={onToggle}
        />
      </div>
      <div className='grow flex '>{title}</div>
      <div>
        <button
          className='px-4 py-2 rounded-md bg-red-700 text-white'
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
