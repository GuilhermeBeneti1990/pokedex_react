import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLoader } from '../../actions/pokemonActions'
import './style.css'

function Content(props) {
    const { name, order, height, weight , sprites, types} = props.pokemon

    useEffect(() => {
        if(Object.keys(props.pokemon).length !== 0) {
            props.setLoader(false)
        }
    }, [])
    return (
        <Container>
            {Object.keys(props.pokemon).length === 0 ?
                <span className='noResultLabel'>
                    Pesquise um pokemon para visualizar seus dados
                </span>
            : props.loader ? <h1>Carregando...</h1> :
            <Card className='pokemonCard' elevation={3}>
                    <div className='pokemonImage'>
                        <img src={sprites.front_default}></img>
                        <div className='orderAndName'>
                            <span className='order'>#{order}</span>
                            <span className='name'>{name}</span>
                        </div>
                    </div>
                    <div className='pokemonDimensions'>
                        <span><b>Weight:</b> {weight}</span>
                        <span><b>Height:</b> {height}</span>
                    </div>
                    <div className='types'>
                        <ul>
                            {types.map(type => {
                                return <li key={type.slot}><em>{type.type.name}</em></li>
                            })}
                        </ul>
                    </div>
                </Card> }
        </Container>
    )
}

const mapStateToProps = state => ({
    pokemon: state.pokemonState.pokemon,
    loader: state.pokemonState.loader
})

const mapDispatchToProps = dispatch => bindActionCreators({ setLoader }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Content)