import { useEffect, useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';

function TotoListItem({ item, handleDelete, todoList, setTodoList }) {
  const check = () => {
    setCheckbox(checkbox ? false : true);
  };

  const [checkbox, setCheckbox] = useState(item.done ? true : false);

  useEffect(() => {
    setTodoList(
      todoList.map((listItem) => {
        if (listItem.id === item.id) {
          listItem.done = checkbox ? true : false;
        }
        return listItem;
      })
    );
  }, [checkbox]);

  return (
    <div className='flex items-center gap-6 text-2xl bg-mulberry-300 w-full justify-between rounded-lg p-2 shadow-md'>
      <div className='flex items-center gap-2'>
        <button onClick={check}>
          <div>
            {checkbox ? (
              <MdCheckBox className='text-mulberry-900' />
            ) : (
              <MdCheckBoxOutlineBlank className='text-mulberry-900' />
            )}
          </div>
        </button>
        <div className=''>{item.title}</div>
      </div>
      <button onClick={handleDelete}>
        <TiDelete className='text-mulberry-900' />
      </button>
    </div>
  );
}

export default TotoListItem;
