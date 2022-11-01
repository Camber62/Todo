import React, {useRef, useState} from "react";
import GeneratorId from './GeneratorId'

const EditTodo = (props) => {
    const todoEdit = props.todoEdit
    const toDoList = props.toDoList
    const SetToDoList = props.SetToDoList
    const buttonElement = props.buttonElement
    const [error, setError] = useState(false)
    const inputValueTodo = useRef(null);


    for (let i = 0; i < toDoList.length; i++) {
        if (todoEdit === true && i === buttonElement) {
            inputValueTodo.current.value = toDoList[i].todo
        }
    }



    const EditTodoBtn = () => {
        const newBooks = toDoList.map((post, index) => {
            if (index !== buttonElement) {
                return post
            }
            return {
                ...post,
                todo: inputValueTodo.current.value,
            }
        });

        if (
            inputValueTodo.current.value !== "") {
            setError(false)

        } else
            setError(true)

        SetToDoList(newBooks)
    }




    const AddTodosBtn = () => {
        if (
            inputValueTodo.current.value !== "") {
            setError(false)
            SetToDoList(toDoList.concat([
                    {
                        id: GeneratorId(toDoList),
                        todo: inputValueTodo.current.value,
                        checkedValue:false,

                    }

                ])
            )
        } else setError(true)
    }


    return (
        <>
            <div className={'modal'}>
                <div className="modalForm">
                    <input placeholder='todo...' type="text" ref={inputValueTodo}/>
                    <button onClick={EditTodoBtn}>Edit</button>
                    <button onClick={AddTodosBtn}>Add</button>
                </div>
            </div>

            <h2 className={error ? 'error' : 'none'}>Error.Enter the correct values</h2>
        </>
    )
}


export default EditTodo