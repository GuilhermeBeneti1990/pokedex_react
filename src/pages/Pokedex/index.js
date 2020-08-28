import React from 'react'
import Header from '../../components/Header'
import Toolbar from '../../components/Toolbar'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

function Pokedex() {

    return (
        <div className="container">
            <Header />
            <Toolbar />
            <Content />
            <Footer />
        </div>
    )

}

export default Pokedex