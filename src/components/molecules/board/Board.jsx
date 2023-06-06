import Navbar from '../../organism/navbar/navbar'
import Tasks from '../../organism/tasks/tasks';
import "./Board.css"
const Board =()=>{
    return (
        <div className="Board">
         <Navbar />
         <Tasks/>
        </div>
    )
}

export default Board;