import React from 'react'
import classes from './tasks.css'
import Task from './task/task'

const Tasks = (props) => {

    return (
        <div className={classes.Tasks}>
            {props.tasks.map((i,index) => {
                return <Task
                    val={i}
                    key={i.key}
                    delete={()=>{props.deleteTask(index)}}
                    add={()=>{props.completed(index)}} />
            })}
        </div>
    );


}

export default Tasks