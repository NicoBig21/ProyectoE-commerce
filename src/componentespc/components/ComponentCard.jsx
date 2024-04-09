import { Link } from 'react-router-dom'

export const ComponentCard = ({ id, nombre, imagen, gama, precio }) => {
    return (
      <div className="col">
          <div className="card">
              <div className="row no-gutters">
                  <div className="col-4">
                      <img src={imagen} className="card-img" alt='' />
                  </div>
  
                  <div className="col-8">
  
                      <div className="card-body">
  
                          <h5 className="card-title"> {nombre} </h5>
  
                          <p>Gama: {gama}</p>
                          <p>Precio: {precio}</p>
  
                          <Link to={`/productos/${ id }`}>
                              Mas info...
                          </Link>
  
                      </div>
  
                  </div>
              </div> 
          </div>
      </div>
    )
  }