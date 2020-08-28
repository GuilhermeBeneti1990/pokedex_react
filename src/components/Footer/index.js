import React from 'react'
import Pokeball from '../../assets/img/pkball.png'
import './style.css'

function Footer() {

    return (
        <div className='footer'>
            <span><b>Created by Trainer:</b> Guilherme Beneti</span> <img width='20em' src={Pokeball}></img>
        </div>
    )
}

export default Footer