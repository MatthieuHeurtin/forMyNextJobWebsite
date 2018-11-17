import React, { Component } from 'react';
import TechnologyList from './TechnologyList/TechnologyList.';



class Project extends Component {
    render() {
      return (
        <div className='body'>
        <h1>Project</h1>
        <TechnologyList/>
     </div>
      );
    }
  }
  
  export default Project;