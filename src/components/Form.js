import { useRef , useContext } from "react";
import ListContext from "../store/list-context";
import './Form.css'

const Form = ()=>{
    
    const listCtx = useContext(ListContext)

    const todoInputRef = useRef();
    const timeInputRef = useRef();

const submitHandler = (event)=>{
    event.preventDefault();
    const todo = todoInputRef.current.value;
    const time = timeInputRef.current.value
    if(!todo || !time){
        alert("Please enter full info")
        return
    }
    const time12h = time.split(':')
    let amPm = 'am'
    if(time12h[0] > 12){
        amPm = 'pm'
        time12h[0]=time12h[0] - 12
    }
    const timeIn12h = `${time12h[0]}:${time12h[1]} ${amPm}`
    

    const newItem = {todo:todo,time:timeIn12h}
    listCtx.add(newItem)
}


    return <form className="form" onSubmit={submitHandler} >
        <div className="inputs">
        <div>
        <label htmlFor="todo" >To do </label>
        <input id="todo" type="text" ref={todoInputRef} />
        </div>
        <div>
        <label htmlFor="atime" >Time </label>
        <input className="timeInput" id="atime" type="time" ref={timeInputRef} />
        </div>
        </div>
        
        
        
        
        <button type='submit'>Enter Todo</button>
    </form>
}


export default Form