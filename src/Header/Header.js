import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    constructor(props){
        super(props);
    }


    
    render() {
        return (
            <div className="Header">
              <h2>Matthieu Heurtin's website</h2>
              <h6> Send me an email : <br/>
              <a href="mailto:matthieu.heurtin@gmail.com"><img src={require('./images/gmail.png')}/></a>
                </h6>
            </div>
          );
    }
}

export default Header