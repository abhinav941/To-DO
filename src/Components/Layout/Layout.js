import React from 'react';
import classes from './Layout.css'
import Area from '../area/area';

const Layout =(props)=>{
    return(
        <div className={classes.Layout}>
            <h3>Header</h3>
            <div>
                <Area/>
            </div>
            <footer>footer</footer>
        </div>
    );
}
export default Layout