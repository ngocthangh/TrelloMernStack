import React from 'react'
import './Task.scss'

function Task(props) {
    return (
        <>
        {
            props.img ? (
                <li className="task-item">
                    <img src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="logo" />
                    {/* Title: THANGHN DEV */}
                </li>
            ) : (
                <li className="task-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque.</li>
            )
        }
        </>
    )
}

export default Task
