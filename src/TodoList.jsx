import TotoListItem from './TotoListItem';

function TodoList({ todoList, handleDelete, setTodoList }) {
  return (
    <div className='border-2 h-96 lg:w-[50vw] w-[80vw] bg-mulberry-500 flex flex-col items-center justify-start gap-4 p-4 rounded-xl border-none'>
      {todoList.map((item) => (
        <TotoListItem
          key={item.id}
          item={item}
          handleDelete={() => handleDelete(item.id)}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}

export default TodoList;
