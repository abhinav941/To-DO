import React from 'react';
import classes from './task.css'
import del from '../../../../assets/svg/del.svg'

const Task = (props) => {
    return (
        <div className={classes.Task}>
            <div className={classes.edit} onClick={props.add} >
                <label className={classes.container}>
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                </label>
            </div>
                <div style={{ 'fontSize': '1.2em', marginBottom: '17px' }}><strong >{props.val.name}</strong></div>
                <div> <strong>Time</strong> : {props.val.time}</div>
                <div> <strong>Created on:</strong> </div>
                <div onClick={props.delete}>
                    <img src={del} alt='delete' className={classes.delete} />
                </div>
            </div>
            );
        }
        
export default Task