import api from './api'

export const list = async () => {
    const response = await api.get('/pokemon')
    return response
}

export const getPokemon = async (pokemon) => {
    const response  = await api.get(`/pokemon/${pokemon}`)
    return response
}