import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const [storage, setStorage] = useState(
    localStorage.getItem('item') !== null
      ? JSON.parse(localStorage.getItem('item'))
      : []
  );

  useEffect(() => {
    if (localStorage.getItem('item') !== null) {
      setTodoList(JSON.parse(localStorage.getItem('item')));

      setStorage(JSON.parse(localStorage.getItem('item')));
    } else {
      setStorage([]);
    }
  }, []);

  useEffect(() => {
    setStorage(todoList);
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(storage));
  }, [storage]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const newItem = {
      title: text,
      done: false,
      id: uuidv4(),
    };

    setTodoList([...todoList, newItem]);

    setStorage([...storage, newItem]);

    setText('');
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    setStorage(todoList);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4 bg-mulberry-900 h-fit py-8 m-8 rounded-xl'>
      <h1 className='text-5xl font-semibold mt-6 text-mulberry-200 pb-4'>
        Things to do:
      </h1>
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
        setTodoList={setTodoList}
      />
      <input
        className='rounded-xl w-96 h-12 p-4 bg-mulberry-100'
        type='text'
        onChange={handleChange}
        value={text}
      />
      <button
        className=' bg-mulberry-500 px-8 py-4 rounded-xl text-mulberry-200 text-xl font-semibold'
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
