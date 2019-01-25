import React from 'react';
import classes from './Controls.css'
import plus from '../../../assets/svg/plus.svg'
import home from '../../../assets/svg/home.svg'
import checklist from '../../../assets/svg/checklist.svg'
import Aux from '../../../hoc/Aux'


const Controls = (props) => {
    return (
        <div className={classes.Controls}>
            <div className={classes.Add}>
                <img src={home} alt="home"></img>
            </div>
            <div className={classes.Add1} onClick={props.clicked}>
                <img src={plus} alt="add task" />
            </div>
            <div className={classes.Add}>
                <img src={checklist} alt="checklist"></img>
            </div>
            <Aux>
            { props.showAddBtn ?
            <div className={classes.Item}>
                <div className={classes.AddItem}>
                    <input 
                    type="text" 
                    placeholder="TaskName" 
                    onChange={(event) => (props.changed(event,'name'))}></input>
                    <input 
                    type="text" 
                    placeholder="Time" 
                    onChange={(event) => { props.changed(event,'time') }}></input>
                    <input 
                    type="date" 
                    onChange={() => { props.changed('date') }}></input>
                    <button onClick={props.addTask} > Add</button>
                </div>
            </div> :null
            }
        </Aux>
        </div>
    );
}
export default Controls