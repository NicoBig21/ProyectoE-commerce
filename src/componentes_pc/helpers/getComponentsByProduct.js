export default function getComponentsByProduct(componentes, producto) {

    try {
        validProducts ( producto )
        return componentes.filter(componentes => componentes.producto === producto);
    } catch (error) {
        console.log(error)
    }
};

const validProducts = ( producto ) => {
    const validProducts = ['Fuente', 'Motherboard', 'Procesador'];
        
    if (!validProducts.includes(producto)) throw new Error(`${producto} no es un producto válido`);
}