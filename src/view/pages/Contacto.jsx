import Tienda from '../../../assets/tienda.jpg'
import Form from '../../components/Form';

export default function Contacto() {
  return (
    <div className="container">
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
          <Form />
        </div>
      </div>
    </div>
  );
}
