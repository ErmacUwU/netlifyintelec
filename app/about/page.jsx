import React from 'react';
import Link from 'next/link';
const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col gap-4 items-center">
          <div className=" p-4 w-full max-w-md">
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
          <div className="p-2 w-full border-blue-500 flex items-center justify-center"> 
          <Link href="https://wa.me/+526462160078" className='flex items-center justify-center m-2'>
            <img src="logos/WSP.png" alt="Whatsapp Logo" className="w-80 h-30" />
          </Link>
          <Link href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwRQQnbstJcLdRvRkMdBsSrspztBdZmBVlhpnJjctrwZQfhMKVbJBpcdrDtLCTBcWRlSPDw" className='flex items-center justify-center m-2'>
                <img src='logos/gmail.png' alt='Gmail Logo' className='w-32 '></img>
          </Link>
          <Link href="https://www.facebook.com/Gregoyo55/">
                <img src='logos/facebook.png' className='h-28'></img>
          </Link>
        </div>
          <div className=" p-4 w-full max-w-md text-center font-bold">
            Delante 332, Colonia Buenaventura, Ensenada, Baja California, México
          </div>
          <div className='p-4 w-full border-blue-500 flex items-center justify-center'>
        <img src='logos/phone.png' className='h-24'></img>
        <h2 className='m-3 font-bold text-3xl'>646-120-56-05</h2>
        </div>
          <div className=" p-4 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8484075185834!2d-116.60067952288273!3d31.85058242834292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88df2460a130d%3A0xe8c59cb6f3737480!2sINTELEC!5e0!3m2!1ses-419!2smx!4v1720110123590!5m2!1ses-419!2smx"
              className="w-full h-64 md:h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
