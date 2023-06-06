import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    inputValue: '',
    todoLists: [], // Renamed from todoList
    show: false,
    isDialogueOpen: false,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setTodoList: (state) => {
      state.todoList.push(state.inputValue); // Changed to push the inputValue to todoLists array
      state.inputValue = '';
    },
    deleteTodoList: (state, action) => {
      const index = action.payload;
      state.todoLists.splice(index, 1);
    },
    addTodoList: (state) => {
      state.todoLists.push({ title: state.inputValue, tasks: [] }); // Changed to add an object with title and tasks properties to todoLists
      state.inputValue = '';
    },
    setShow: (state) => {
      state.show = !state.show;
    },
    setIsDialogueOpen: (state) => {
      state.isDialogueOpen = !state.isDialogueOpen;
    },
    addTaskToList: (state, action) => {
      const { listIndex, task } = action.payload;
      state.todoLists[listIndex].tasks.push(task); // Added new reducer to add tasks to a specific list
    },
  },
});

export const {
  setInputValue,
  setTodoList,
  deleteTodoList,
  addTodoList,
  setShow,
  setIsDialogueOpen,
  addTaskToList,
} = taskSlice.actions;

export default taskSlice.reducer;
