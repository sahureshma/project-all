import List from '../../molecules/List/List';
import ListController from '../../organism/ListController/listController';
import Navbar from '../../organism/navbar/navbar'
import { DragDropContext } from 'react-beautiful-dnd';
import "./Board.css"
import { setListData } from '../../../store/slices/taskSlices';
import {useDispatch,useSelector} from 'react-redux'

const Board = () => {
    const dispatch = useDispatch();
    const listData = useSelector((state)=>state.tasks.listData)


    function handleOnDragEnd(result){
        const {source, destination} = result;
        if(!destination){
          return;
        }
        if(source.droppableId !== destination.droppableId){
          const [sourceCard] = listData.filter((ele)=> ele.id === source.droppableId);
          const [destinationCard] = listData.filter((ele)=> ele.id === destination.droppableId);
          const sourceList =  [...sourceCard.task];
          const destinationList = [...destinationCard.task];
          const [removedList] = sourceList.splice(source.index, 1);
          destinationList.splice(destination.index, 0, removedList);
          let UpdatedList = listData.map((ele) => {
            if(ele.id === source.droppableId){
              return {...ele, task:sourceList}
            }
            else if(ele.id === destination.droppableId){
              return {...ele, task: destinationList};
            }
            return ele;
          })
          dispatch(setListData(UpdatedList));
          localStorage.setItem('List', JSON.stringify(UpdatedList))
        }
        else{
          const [sourceCard] = listData.filter((ele)=> ele.id === source.droppableId);
          const sourceList =  [...sourceCard.task];
          const [removedList] = sourceList.splice(source.index, 1);
          sourceList.splice(destination.index, 0 , removedList);
          const UpdatedList = listData.map((ele)=>{
            if(ele.id === source.droppableId){
              return {...ele, task: sourceList};
            }
            return ele;
          })
          dispatch(setListData(UpdatedList));
          localStorage.setItem('List', JSON.stringify(UpdatedList))
        }    
      }
    return (
        <div className="Board">
            <Navbar />

            <DragDropContext onDragEnd={(result)=> handleOnDragEnd(result)}>
                <div className='board-wrapper'>

                    <ListController />
                    <List />
                </div>
            </DragDropContext>
        </div>
    )
}

export default Board;