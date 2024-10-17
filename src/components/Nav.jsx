
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';


export function Nav() {

    return (
        <div className='Nav'>

            <>
                <Link className="navLink" to="/home">
                    Home
                </Link>
            </>   



</div>


    )


}