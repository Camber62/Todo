import React, {useState} from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import deleteTodo from "./DeleteTodo";
import EditTodo from "./Edit_Add_Todo";

const Todo = (props) => {
    const toDoList = props.toDoList
    const SetToDoList = props.SetToDoList
    const todoEdit = props.todoEdit
    const setTodoEdit = props.setTodoEdit
    const [buttonElement, setButtonElement] = useState()
    const [value, setValue] = useState("");
    const clickEdit = (element) => {
        setButtonElement(Number(element.target.id))
        todoEdit(true)

    }


    return (
        <>
            <div className='todo'>
                <EditTodo
                    todoEdit={todoEdit}
                    setTodoEdit={setTodoEdit}
                    value={value}
                    setValue={setValue}
                    toDoList={toDoList}
                    SetToDoList={SetToDoList}
                    buttonElement={buttonElement}

                />

                <table>
                    <tr>
                        <th>Completed</th>
                        <th>Todo...</th>
                        <th>Delete/Edit</th>
                    </tr>


                    {toDoList.map((int, element) => {
                        return (
                            <tr key={element}>

                                <td>
                                    <Checkbox
                                        checked={!!int.checkedValue}
                                        icon={
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flex: 1,
                                                    backgroundColor: "#174A41",
                                                    alignSelf: "stretch",
                                                }}
                                            >
                                                <Icon.FiCheck color="white" size={20}
                                                />
                                            </div>}
                                        borderColor="#174A41"
                                        borderRadius={20}
                                        style={{overflow: "hidden",}}
                                        size={20}
                                        onChange={() => {
                                            int.checkedValue = !int.checkedValue
                                            SetToDoList([...toDoList])
                                        }}
                                        // labelStyle={checkbox ? {textDecoration:'line-through'}:{textDecoration:'none'}}
                                    />
                                </td>

                                <td className={int.checkedValue ? 'decoration' : ''}>{int.todo}</td>
                                <td>
                                    <button className='buttonDel'
                                            id={element}
                                            onClick={(element) => {
                                                deleteTodo(element, toDoList, SetToDoList)
                                            }}
                                    >Delete
                                    </button>
                                    <button className='buttonEdit'
                                            id={element}
                                            onClick={clickEdit}
                                    >Edit
                                    </button>

                                </td>

                            </tr>
                        );
                    })}
                </table>
            </div>

        </>
    )
}


export default Todo