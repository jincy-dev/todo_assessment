import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTaskList } from '../redux/slices/task';
import { Task } from '../types';

const useData = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      dispatch(setTaskList(response.data as Task[]));
    } catch {
      console.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading };
};

export default useData;
