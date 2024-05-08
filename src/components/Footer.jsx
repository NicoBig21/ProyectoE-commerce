import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light-black w-full text-white">
      <div className="container py-10">
        <div className="row">
          <div className="col-md-3 footer-margin-top">
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Redes<span className="text-blue-600"> Sociales</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="cursor-pointer hover-text-yellow-600" />
              <FaTwitter className="cursor-pointer hover-text-blue-600" />
              <FaLinkedin className="cursor-pointer hover-text-blue-600" />
              <FaYoutube className="cursor-pointer hover-text-red-600" />
            </div>
          </div>
          <div className="col-md-3">
            <p className="text-gray-800 font-bold footer-margin-top">Producto</p>
            <ul>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Acciones
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Futuros y Opciones
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Fondos de Inversión
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Depósitos a Plazo Fijo
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="text-gray-800 font-bold text-2xl footer-margin-top">Empresa</p>
            <ul>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Acerca de Nosotros
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Productos
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Precios
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Carreras
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Prensa y Medios
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="text-gray-800 font-bold text-2xl footer-margin-top">Soporte</p>
            <ul>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Contacto
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Portales de Soporte
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Lista de Tarifas
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Descargas y Recursos
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover-text-blue-600 cursor-pointer">
                Videos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
