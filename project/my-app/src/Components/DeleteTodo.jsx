import React from "react";

const deleteTodo = (element,toDoList,SetToDoList) => {
    const newToDoList = toDoList.filter(function (entry, index) {
        return index !== Number(element.target.id);
    });
    SetToDoList(newToDoList);
console.log(element.target.id)

}


export default deleteTodo