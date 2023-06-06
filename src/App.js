
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import TodoTasks from './components/organism/todoTasks/todoTasks';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <TodoTasks/>

    </Provider>
     
    </div>
  );
}

export default App;
