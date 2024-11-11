import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/slices/selectors';
import { setFilter } from '../redux/slices/task';

const Filters = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = (state: 'all' | 'pending' | 'completed') => {
    dispatch(setFilter(state));
  };

  return (
    <div className='grid grid-cols-3 gap-6 text-white'>
      <button
        className={`py-2 px-4 ${
          filter == 'all' ? 'bg-blue-600' : 'bg-gray-800'
        }`}
        onClick={() => onChange('all')}
      >
        All
      </button>
      <button
        className={`py-2 px-4 ${
          filter == 'pending' ? 'bg-blue-600' : 'bg-gray-800'
        }`}
        onClick={() => onChange('pending')}
      >
        Pending
      </button>
      <button
        className={`py-2 px-4 ${
          filter == 'completed' ? 'bg-blue-600' : 'bg-gray-800'
        }`}
        onClick={() => onChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
