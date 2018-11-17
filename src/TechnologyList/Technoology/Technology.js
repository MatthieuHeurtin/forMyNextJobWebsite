import React, { Component } from 'react';
import './Technology.css'

import Description from './Description/Description'

class Technology extends Component {
    constructor(props){
        super(props)
        this.state = {name : props.name, visible : false}
        this.expand = this.expand.bind(this);
        this.getDescription = this.getDescription.bind(this);
    }

    expand(event){
       this.setState( {visible : !this.state.visible})
    }
    
    getDescription(){
        switch(this.state.name) {
            case "C-Sharp":
                return <Description name='C-Sharp'/>
            case "C":
                return <Description name='C'/>
            case "ReactJS":
                return <Description name='ReactJS'/>
            default :
                return "Not yet implemented"
        }
    }

    render(){
        return   <div className='Technology'>
        <button id='expandButton'   onClick={this.expand}>
             {this.state.name} 
        </button>
            <div>{
          this.state.visible
            ? this.getDescription()
            : null
            }</div>
    </div>
    }
}


export default Technology;