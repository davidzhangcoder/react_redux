import React, { useState } from 'react'

import ToDoForm from './test_hooker3_todoform'

const ToDoList = () => {

    const [data, setData] = useState([])

    const addToDo = ({commentValue}) => {
        data.push(commentValue);
        setData([...data])
    }
    return (
        <div>
            ToDoList
            <ToDoForm addToDo={addToDo}></ToDoForm>
            {
                data.map( (item,index) => <div>{item}</div> )
            }
        </div>
    );
}

export default ToDoList;