import './Item.css'
import {useState} from 'react'

const Item = props =>{

    const [isDone,setIsDone] = useState(false)

   const deleteHandler = ()=>{
    props.onDelete(props.id)
   }
   

  
   const doneHandler = ()=>{
    setIsDone(prev => {
        return !prev
    })
   }

    return <div>
        <div className={isDone?'done':''} >
            <p>{props.todo} at {props.time} </p>
            
        </div>
        
        <div className='actions'>
            
            <button onClick = {doneHandler} >Done</button>
            <button onClick = {deleteHandler} >Delete</button>
        </div>
    </div>
}

export default Item