import Task from 'components/Task/Task'
import React from 'react'
import './Column.scss'

function Column() {
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className="task-list">
                <Task img />
                <Task />
                <Task />
                <Task />
                <Task img />
                <Task />
                <Task />
                <Task />
            </ul>
            <footer>Add another card</footer>
        </div>
    )
}

export default Column
