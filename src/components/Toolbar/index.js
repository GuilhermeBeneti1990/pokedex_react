import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Pokeball from '../../assets/img/pkball.png'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setPokemon, setLoader } from '../../actions/pokemonActions'
import Swal from 'sweetalert2'
import './style.css'

import { getPokemon } from '../../services/resources'

function Toolbar(props) {

    const [pokemonFilter, setPokemonFilter] = useState('')

    const searchPokemon = () => {
        if(!pokemonFilter) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Digte o nome do pokemon desejado',
              })
            return false
        }
        getPokemon(pokemonFilter).then(response => {
            props.setLoader(true)
            props.setPokemon(response.data)
        })
    }

    return (
        <div className='toolbar'>
            <img width='150em' src={Pokeball} onClick={searchPokemon}></img>
            <TextField name='pokemon' id="standard-basic" label="Buscar Pokemon" variant="outlined" onChange={(e) => setPokemonFilter(e.target.value)}/>
            <small>*Digite o nome do pokemon e clique na pokebola</small>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ setPokemon, setLoader }, dispatch)

export default connect(null, mapDispatchToProps)(Toolbar)