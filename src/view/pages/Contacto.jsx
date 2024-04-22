import Tienda from '../../../assets/tienda.jpg'

export default function Contacto() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contactanos</h1>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-3">
            En nuestra tienda Pokémon, nos dedicamos a brindarte la mejor experiencia y soporte posible. Puedes contactarnos para cualquier consulta relacionada con nuestros productos, servicios o cualquier otra cosa relacionada con el mundo de los Pokémon.
          </p>
          <div className="d-flex justify-content-center mb-3">
            <img src={Tienda} alt="Logo Pokémon" className="img-fluid" style={{ maxHeight: '34rem' }}/>
          </div>
          <p>
            Nuestro equipo de expertos está listo para responder tus preguntas y resolver cualquier problema que puedas tener.
          </p>
        </div>
        <div className="col-md-6">
          <p className="mb-3">
            Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="Ingrese su nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" placeholder="Ingrese su apellido" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Número de celular</label>
              <input type="tel" className="form-control" id="phone" placeholder="Ingrese su número de celular" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Ubicación</label>
              <input type="text" className="form-control" id="location" placeholder="Ingrese su ubicación" />
            </div>
            <div className="mb-3">
              <label htmlFor="dni" className="form-label">DNI</label>
              <input type="text" className="form-control" id="dni" placeholder="Ingrese su DNI" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Describa su problema</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Ingrese su mensaje"></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}
