import { componentes } from '../data/componentes'

export const getProductById = ( id ) => {
    
    return componentes.find( componente => componente.id === id )
}