import React, { Component } from 'react';
import './TechnologyList..css'

import Technology from './Technoology/Technology'


class TechnologyList extends Component {
    constructor(props){
        super(props)
        this.state = {panels : props.panels}
    }

    render(){
        return   <div className='TechnologyList'>
        <Technology name='C-Sharp'/>
        <Technology name='SQL'/>
        <Technology name='ReactJS'/>
        <Technology name='C'/>
        </div>
    }
}


export default TechnologyList;