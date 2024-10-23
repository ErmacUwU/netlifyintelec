"use client";
import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-200 p-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-8 space-y-8">

        {/* Horarios */}
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Horario de Atención</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 px-4 py-2">Día</th>
                <th className="border-b-2 border-gray-300 px-4 py-2">Horario</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dia: 'Lunes', horario: '08:00 a.m. – 05:30 p.m.' },
                { dia: 'Martes', horario: '08:00 a.m. – 05:30 p.m.' },
                { dia: 'Miércoles', horario: '08:00 a.m. – 05:30 p.m.' },
                { dia: 'Jueves', horario: '08:00 a.m. – 05:30 p.m.' },
                { dia: 'Viernes', horario: '08:00 a.m. – 05:30 p.m.' },
                { dia: 'Sábado', horario: '08:00 a.m. – 01:30 p.m.' },
                { dia: 'Domingo', horario: 'Cerrado' },
              ].map(({ dia, horario }) => (
                <tr key={dia}>
                  <td className="border-b border-gray-300 px-4 py-2">{dia}</td>
                  <td className="border-b border-gray-300 px-4 py-2">{horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Texto de contacto */}
        <div className="text-center text-lg font-semibold text-gray-800">
          <p>¡No dudes en contactarnos a través de los siguientes medios!</p>
        </div>

        {/* Redes sociales */}
        <div className="w-full flex justify-center space-x-6">
          <Link href="https://wa.me/+526462160078">
            <img src="logos/WSP.png" alt="Whatsapp Logo" className="w-40 h-auto transform hover:scale-110 transition" />
          </Link>
          <Link href="https://mail.google.com">
            <img src="logos/gmail.png" alt="Gmail Logo" className="w-40 h-auto p-0 transform hover:scale-110 transition" />
          </Link>
          <Link href="https://www.facebook.com/Gregoyo55/">
            <img src="logos/facebook.png" alt="Facebook Logo" className="w-40 h-auto transform hover:scale-110 transition" />
          </Link>
        </div>

        {/* Dirección */}
        <div className="text-center text-lg font-semibold text-gray-800">
          Delante 332, Colonia Buenaventura, Ensenada, Baja California, México
        </div>

        {/* Teléfono */}
        <div className="flex items-center justify-center space-x-4">
          <img src="logos/phone.png" className="h-16 md:h-20" alt="Phone Icon" />
          <h2 className="text-2xl md:text-3xl font-bold text-black">646-120-56-05</h2>
        </div>

        {/* Formulario */}
        <div className="w-full max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-800">Ponte en Contacto</h2>
          <form action="https://api.web3forms.com/submit" method="POST" className="mt-6 flex flex-col gap-4">
            <input type="hidden" name="access_key" value="31bbe0ae-23eb-49b0-aa38-39e8a3fde6c1" />
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Mapa */}
        <div className="w-full max-w-lg mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8484075185834!2d-116.60067952288273!3d31.85058242834292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88df2460a130d%3A0xe8c59cb6f3737480!2sINTELEC!5e0!3m2!1ses-419!2smx!4v1720110123590!5m2!1ses-419!2smx"
            className="w-full h-64 border-0 rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
