import { componentes } from '../data/componentes'

export default function getProductById( id ) {
    
    return componentes.find( componente => componente.id === id )
}