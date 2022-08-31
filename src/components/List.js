import Item from "./Item";
import { useContext } from "react";
import ListContext from "../store/list-context";
import './List.css'

const List = () => {
    const listCtx = useContext(ListContext);
   
     const deleteHandler = dItem =>{
      
       listCtx.delete(dItem)
       
     }

  


  return (
    <>
    {listCtx.totalNumber === 0 &&<p>no added todos</p>}
    {listCtx.totalNumber > 0 &&<div className='list'>
      <h1>My list</h1>
      {listCtx.totalNumber > 0 && listCtx.todoList.map((todoD) => {
        return <Item key={todoD.id} id={todoD.id}  onDelete= {deleteHandler} todo={todoD.todo} time={todoD.time} />;
      })}
    </div>}
    </>
  );
};

export default List;
