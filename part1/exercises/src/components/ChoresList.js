
import React from 'react';
import classes from './ChoresList.module.css';

class ChoreList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle"];
      return (
      <div>
         <h3 className = {classes.choresHeading} >Movies I Watched This Month</h3>
         <ol>
            <li className={classes.choresText}>{movies[0]}</li>
            <li className={classes.choresText}>{movies[1]}</li>
         </ol>
      </div>
      );
   }
}

export default ChoreList;