import Board from "./components/molecules/board/Board";
import Navbar from "./components/organism/navbar/navbar";
import Tasks from "./components/organism/tasks/tasks";
import { Provider } from 'react-redux'
import store from "./store/store";



export default function App(){



  return(
    <div className="App">
    <Provider store={store}>
    <Board/>
    </Provider>


    </div>
  )
}