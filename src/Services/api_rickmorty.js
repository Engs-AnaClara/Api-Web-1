import axios from 'axios'


const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export const getCharacters = async (page = 1) => {
  try {
    const response = await api.get(`/character?page=${page}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar personagens:', error)
    throw error
  }
}


export const getCharacterById = async (id) => {
  try {
    const response = await api.get(`/character/${id}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar personagem:', error)
    throw error
  }
}

export default api