import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInputValue,
  addTodoList,
  deleteTodoList,
  setShow,
  setIsDialogueOpen,
  addTaskToList,
} from '../../../store/slices/taskSlices';
import Input from '../../atoms/inputField/inputField';
import Button from '../../atoms/button/button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import style from './todoTasks.module.css';

export default function TodoTasks() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.tasks.inputValue);
  const todoLists = useSelector((state) => state.tasks.todoLists);
  const show = useSelector((state) => state.tasks.show);
  const isDialogueOpen = useSelector((state) => state.tasks.isDialogueOpen);

  const [selectedListIndex, setSelectedListIndex] = useState(0);

  function getInputValue(e) {
    dispatch(setInputValue(e.target.value));
  }

  function handleAddList() {
    dispatch(setIsDialogueOpen(true)); // Open the dialog
  }

  function handleAddTodo() {
    dispatch(addTaskToList({ listIndex: selectedListIndex, task: inputValue })); // Add task to the selected list
    dispatch(setInputValue('')); // Clear the input field
  }

  function handleDeleteTodoList(index) {
    dispatch(deleteTodoList(index));
  }

  function handleSelectList(index) {
    setSelectedListIndex(index);
  }

  const addbtnStyle = {
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.7rem',
    boxShadow: '2px 3px 2px rgba(0, 0, 0, 0.5)',
  };

  return (
    <>
      <div>
        {isDialogueOpen ? (
          <div>
            <Dialog>
              <Input value={inputValue} performTask={getInputValue} />
              <Button text="Add Task" performTask={handleAddTodo} />
            </Dialog>
          </div>
        ) : (
          <div>
            <Button
              variant="outlined"
              text={<div className={style.addbtn}><AddIcon /> Add a List</div>}
              style={addbtnStyle}
              onClick={handleAddList}
            />
          </div>
        )}

        <div>
          {todoLists.map((list, index) => (
            <div key={index}>
              <Typography variant="h5" component="h2">
                {list.title}
              </Typography>
              <ul>
                {list.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    <p>{task}</p>
                    <Button text="Delete" performTask={() => dispatch(deleteTodoList(index))} />
                  </li>
                ))}
              </ul>
              <Button text="Add Task" performTask={() => handleSelectList(index)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
