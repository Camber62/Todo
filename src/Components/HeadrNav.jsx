import React, {useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Todo from "./Todo";
import ActiveTodo from "../Components/Active";
import Complete from "./Complete";
const Navigation = () => {
    const [todoEdit, setTodoEdit] = useState(false)


    const [toDoList, SetToDoList] = useState([
        {
            id: 1,
            todo: 'За продуктами',
            checkedValue:false,
        }
    ])




    return (
        <>
            <div className="main">
                <h1 style={{color: 'rgb(55, 142, 159)'}}>todos:</h1>

                <Routes>
                    <Route path="/"
                           element={<Todo todoEdit={todoEdit} setTodoEdit={setTodoEdit} SetToDoList={SetToDoList}
                                          toDoList={toDoList}/>}/>
                    <Route path="/Complete" element={<Complete toDoList={toDoList} SetToDoList={SetToDoList}/>}/>
                    <Route path="/ActiveTodo" element={<ActiveTodo toDoList={toDoList} SetToDoList={SetToDoList}/>}/>
                </Routes>
            </div>
            <header>
            <div className='nav'>
                <Link to="/">All</Link>
                <Link to="/Complete">Complete</Link>
                <Link to="/ActiveTodo">Active</Link>
            </div>
        </header>
        </>
    );
}


export default Navigation