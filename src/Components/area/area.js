import React, { Component } from 'react';
import classes from './area.css'
import Tasks from './tasks/tasks';
import Controls from './Controls/Controls';


class Area extends Component {
    state={
        tasks:[
            {name:"do this in time" ,time:'10 mins' ,key:"afa"},
            {name:"do this in time" ,time:'30 mins',key:"afsfa"},
            {name:"do this in time" ,time:'40 mins',key:"afsfsa"},
            {name:"do this in time" ,time:'40 mins',key:"afscvscva"},
            {name:"do this in time" ,time:'40 mins',key:"afvsva"},
            {name:"do this in time" ,time:'40 mins',key:"asvsfa"},
            {name:"do this in time" ,time:'40 mins',key:"afvsv1a"},
            // {name:"do this in time" ,time:'40 mins'},
            // {name:"do this in time" ,time:'40 mins'},
        ],
        completedTasks:[],
        showOnlyOne:false,
        showAdd:false,
        name:'',
        time:''
    }
    
    completeTaskHandler=(index)=>{
        const tasks=[...this.state.tasks]
        const del = tasks[index]
        tasks.splice(index,1);
        const completedTask = [...this.state.completedTasks]
        completedTask.push(del)
        this.setState({
            completeTask:completedTask
        })
        console.log('clicked')
    }

    deleteTaskHandler=(index)=>{
        const del = [...this.state.tasks]
        del.splice(index,1)
        this.setState({
            tasks:del
        })
    }

    showAddHandler=()=>{
        const showAdd = this.state.showAdd
        this.setState({
            showAdd:!showAdd
        })
    }
    changedHandler=(event ,type)=>{
        if(type==="name"){
            this.setState({
                name:event.target.value
            })
        }
        else{
            this.setState({
                time:event.target.value
            })
        }
    }
    
    addTaskHandler=()=>{
        const name = this.state.name;
        const time = this.state.time;
        const key = "a"+(1000*(Math.random()))
        let task ={
            name:name,
            time:time,
            key:key
        }
        const tasks = [...this.state.tasks]
        tasks.push(task)
        this.setState({
            tasks:tasks,
            showAdd:false,
            name:'',
            time:'',
        })
    }


    render() {
        return (
            <div className={classes.Area}>
                <Tasks 
                tasks={this.state.tasks}
                showOne={this.state.showOnlyOne}
                completed={this.completeTaskHandler}
                deleteTask={this.deleteTaskHandler}/>
                
                <Controls
                changed={this.changedHandler}
                clicked={this.showAddHandler}
                showAddBtn={this.state.showAdd}
                addTask={this.addTaskHandler}/>
            </div>
        );
    }
}



export default Area