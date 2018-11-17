import React, { Component } from 'react';
import './Description.css'

import CSHarpContent from './C#/CSHarpContent'
import CContent from './C/CContent'
import ReactJSContent from './ReactJS/ReactJSContent'

class Description extends Component {
    constructor(props){
        super(props)
        this.state = {key : props.name}
        this.getDescription = this.getDescription.bind(this);
        this.getImage = this.getImage.bind(this);
    }


    getDescription(){
        switch(this.state.key) {
            case 'C-Sharp':
              return <CSHarpContent/>
            case 'C':
              return <CContent/>
            case 'ReactJS':
              return <ReactJSContent/>
        }
    }

    getImage(){
        switch(this.state.key) {
            case 'C-Sharp':
              return <img id='logo' src={require('./C#/C#.png')}/>
            case 'C':
              return <img id='logo' src={require('./C/c.jpg')}/>
            case 'ReactJS':
              return <img id='logo' src={require('./ReactJS/react.png')}/>
        }
    }

    render(){
        return   <div className='Description'>
        <div id='left'>{this.getImage()}</div>
        <div id='right'> {this.getDescription()}</div>
    </div>
    }
}


export default Description;