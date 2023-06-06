import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    inputValue: '',
    todoLists: [], 
    showDropdown: false,
    isDialogueOpen: false,
    targetCard:{
        bid: "",
        cid: "",
    },
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setTodoList: (state) => {
      state.todoLists.push(state.inputValue); // Changed to push the inputValue to todoLists array
      state.inputValue = '';
    },
    deleteTodoList: (state, action) => {
      const index = action.payload;
      state.todoLists.splice(index, 1);
    },
    addTodoList: (state) => {
      state.todoLists.push({ title: state.inputValue, tasks: [] }); 
      state.inputValue = '';
    },
    setShowDropdown: (state) => {
      state.showDropdown = !state.showDropdown;
    },
    setShowModal: (state,action) => {
      state.showModal = action.payload;
    },
    addTaskToList: (state, action) => {
      const { listIndex, task } = action.payload;
      state.todoLists[listIndex].tasks.push(task); // Added new reducer to add tasks to a specific list
    },
    setTargetCard:(state,action)=>{
        state.targetCard = action.payload
    },

  },
});

export const {
  setInputValue,
  setTodoList,
  deleteTodoList,
  addTodoList,
  setShowDropdown,
  setIsDialogueOpen,
  addTaskToList,
  setTargetCard,
  setShowModal
} = taskSlice.actions;

export default taskSlice.reducer;
