import { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('8DM90xoREwV7CDa_A');

export default function Form() {
  const [buttonText, setButtonText] = useState('Enviar mensaje');

  const handleSubmit = (event) => {
    event.preventDefault();

    setButtonText('Enviando...');

    // Enviar los datos a EmailJS
    const serviceID = 'service_yqlt3t6'; // Reemplaza 'tu_serviceID' con tu ID de servicio
    const templateID = 'template_78jkjv1'; // Reemplaza 'tu_templateID' con tu ID de plantilla

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        setButtonText('Enviar mensaje');
        alert('¡Mensaje enviado!');
      })
      .catch((err) => {
        console.error('Error al enviar el formulario:', err);
        setButtonText('Enviar mensaje');
        alert('¡Hubo un problema al enviar el mensaje!');
      });      
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="from_name" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="from_name" name="from_name" placeholder="Ingrese su nombre" />
        </div>
        <div className="mb-3">
        <label htmlFor="from_last_name" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="from_last_name" name="from_last_name" placeholder="Ingrese su apellido" />
        </div>
        <div className="mb-3">
        <label htmlFor="email_id" className="form-label">Correo electrónico</label>
        <input type="email" className="form-control" id="email_id" name="email_id" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="mb-3">
        <label htmlFor="cellphone" className="form-label">Número de celular</label>
        <input type="tel" className="form-control" id="cellphone" name="cellphone" placeholder="Ingrese su número de celular" />
        </div>
        <div className="mb-3">
        <label htmlFor="location" className="form-label">Ubicación</label>
        <input type="text" className="form-control" id="location" name="location" placeholder="Ingrese su ubicación" />
        </div>
        <div className="mb-3">
        <label htmlFor="dni" className="form-label">DNI</label>
        <input type="text" className="form-control" id="dni" name="dni" placeholder="Ingrese su DNI" />
        </div>
        <div className="mb-3">
        <label htmlFor="message" className="form-label">Describa su problema</label>
        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Ingrese su mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-danger">{buttonText}</button>
    </form>
  );
}
