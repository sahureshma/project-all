import List from '../../molecules/list/list'
import ListController from '../../organism/ListController/listController';
import Navbar from '../../organism/navbar/navbar'
// import Tasks from '../../organism/tasks/tasks';
import "./Board.css"
const Board =()=>{
    return (
        <div className="Board">
         <Navbar />
         <div className='board-wrapper'>

         <ListController/>
         <List/> 
         </div>
        </div>
    )
}

export default Board;