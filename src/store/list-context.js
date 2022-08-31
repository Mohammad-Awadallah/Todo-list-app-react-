import { createContext, useState, useEffect } from "react";
import { addDoc, collection,deleteDoc,getDocs,doc } from "firebase/firestore";
import { db } from "../firebase-config";
const ListContext = createContext({
  todoList: [],
  totalNumber: 0,
  add: () => {},
  delete: () => {},
});

export const ListContextProvider = (props) => {
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    
    const getTodos = async() =>{
      const todosCollectionRef = collection(db,"todos")
        const data = await getDocs(todosCollectionRef)
        console.log(data.docs.map(doc => ({...doc.data(),id:doc.id})))

        setFilteredArray(data.docs.map(doc => ({...doc.data(),id:doc.id})))
    }
    
    getTodos()

  },[]);

  const deleteHandler = async(dItem) => {
    setFilteredArray((prev) => prev.filter((item) => item.id !== dItem));
    const todoDoc = doc(db,"todos",dItem)
    await deleteDoc(todoDoc)
    
  };

  const addHandler = async (newTodo) => {
    setFilteredArray((prev) => {
      return prev.concat(newTodo);
    });
    
    const todosCollectionRef = collection(db,"todos")
    await addDoc(todosCollectionRef,newTodo)


  };

  const context = {
    todoList: filteredArray,
    totalNumber: filteredArray.length,
    add: addHandler,
    delete: deleteHandler,
  };

  return (
    <ListContext.Provider value={context}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
