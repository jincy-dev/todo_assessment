import './App.css';
import AddTask from './components/AddTask';
import Filters from './components/Filters';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='flex bg-slate-100 grow min-h-screen'>
      <div className='container mx-auto my-12 bg-white px-4 py-8 rounded-xl'>
        <h1 className='text-3xl text-center mb-5'>
          TASK MANAGEMENT APPLICATION
        </h1>
        <div className='flex flex-col items-center gap-4 grow '>
          <Filters />
          <AddTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
