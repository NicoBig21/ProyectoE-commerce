async function getAll () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }) 

    const result = await response.json()
    
    if (!response.ok) {
        throw ('Error en la solicitud')
    }
    return result
}

export default {
    getAll
}

//request = Peticion

//response = Respuesta 

//Metodos http: Get, Post, Put, Patch, Delete