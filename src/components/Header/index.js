import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import About from '../About'
import './style.css'

function Header() {

    const refresh = () => {
        document.location.reload(true);
    }

    return(
        <nav className=''>
            <AppBar position="static" className='appBar'>
                <Toolbar className='appToolBar'>
                    <div>
                        <h2 className='logoName' onClick={refresh}>
                            Pokedex
                            <span>v.0.0.1</span>
                        </h2>
                    </div>
                    <About />
                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default Header