import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import React from "react";
import deleteTodo from "./DeleteTodo";
const Complete=(props)=>{
    const toDoList = props.toDoList
    const SetToDoList = props.SetToDoList

        return (
            <>

                <div className='todo'>
                    <table>
                        <tr>
                            <th>Completed</th>
                            <th>Todo...</th>
                            <th>Delete/Edit</th>
                        </tr>

                        {toDoList.map((int, element) => {
                            if(int.checkedValue===true){
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
                                                        <Icon.FiCheck color="white" size={20}/>
                                                    </div>}
                                                borderColor="#174A41"
                                                borderRadius={20}
                                                style={{overflow: "hidden",}}
                                                size={20}
                                                onChange={() => {
                                                    int.checkedValue = !int.checkedValue
                                                    SetToDoList([...toDoList])
                                                }}

                                            />
                                        </td>

                                        <td className={int.checkedValue ? 'decoration' : ''}>{int.todo}</td>
                                        <td>
                                            <button className='buttonDel'
                                                id={element}
                                                onClick={(element)=>{deleteTodo(element,toDoList,SetToDoList)}}
                                            >Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            }else return

                        })}
                    </table>
                </div>
            </>
        )
}

export default Complete