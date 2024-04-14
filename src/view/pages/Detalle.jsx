import { Navigate, useParams, useNavigate } from 'react-router-dom';
import getProductById from '../helpers/getProductById';

export default function Detalle({handleAddToCart}) {
  const { id } = useParams();
  const producto = getProductById(id);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if (!producto) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../../../assets/${producto.id}.jpg`}
          alt={producto.Nombre}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{producto.Nombre}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="text-primary display-6">${producto.Precio}</span> (6 cuotas sin interés)
          </li>
        </ul>
        <div className="mt-3">
          <ul>
            <li>Marca: {producto.marca}</li>
            <li>Modelo: {producto.modelo}</li>
            <li>Gama: {producto.Gama}</li>
            <li>Producto: {producto.producto}</li>
          </ul>
          <div className="d-flex justify-content-end">
            <div className="me-2">
              <button className="btn btn-secondary" onClick={handleBack}>
                Regresar
              </button>
            </div>
            <div>
            <button className="btn btn-primary" onClick={() => { handleAddToCart(producto); console.log("Producto agregado al carrito"); }}>
                Agregar al carrito
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
