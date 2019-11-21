import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({children}) => {
    //const {Component} = props;
    return(
        <div>
            <div className='header-container'>
                <h3 className='items-header'><Link to='/'>Home</Link></h3>
                <h3 className='items-header'><Link to='/jokes'>Jokes</Link></h3>
                <h3 className='items-header'><Link to='/music-master'>Music Master</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Header;