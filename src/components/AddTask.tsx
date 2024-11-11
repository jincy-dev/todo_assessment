import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/task';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (title) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form className='flex gap-4 w-full max-w-[520px]'>
      <input
        type='text'
        placeholder='Add new task...'
        onChange={onchange}
        value={title}
        className='border-green-600 border p-4 rounded-full grow'
      />
      <button
        type='button'
        className='bg-green-700 text-white font-bold px-8 py-4 rounded-full'
        onClick={onSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
