
export default function Carrito({ cartItems = [], onClose }) {
    
    const handleBack = () => {
        onClose(); // Cierra el componente del carrito
    };

    console.log('Carrito - cartItems:', cartItems);

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="cart-header">
                        <h2>Carrito de Compras</h2>
                        <button onClick={handleBack} className="close-button">&#10005;</button>
                    </div>
                    <div className="cart-items">
                        {console.log('Carrito - Renderizando cartItems:', cartItems)}
                        {cartItems.length === 0 ? (
                            <p>No hay elementos en el carrito.</p>
                        ) : (
                            cartItems.map((item, id) => (
                                <div key={id}>
                                    <p>{item.Nombre} - ${item.Precio}</p>
                                    <p>Marca: {item.marca}</p>
                                    <p>Modelo: {item.modelo}</p>
                                    <p>Gama: {item.Gama}</p>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="cart-footer">
                        <button onClick={handleBack} className="back-button">Seguir Comprando</button>
                        <button className="checkout-button">Proceder al Pago</button>
                    </div>
                </div>
            </div>
        </>
    );
};
