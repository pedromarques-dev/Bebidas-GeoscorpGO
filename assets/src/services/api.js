const baseURL = 'https://api.punkapi.com/v2/'

const baseFetch = async (endpoint) => {
    const resposta = await fetch(`${baseURL}${endpoint}`)
    const json = await resposta.json()
    return json
}


export const pegarBebidas = async () => {

    return await baseFetch('beers?page=1&per_page=5')

}

