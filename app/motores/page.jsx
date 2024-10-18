"use client";
import React, { useState } from 'react';

// Datos de la tabla de motores
const motorData = [
  { hp: '1/6', monofasicos: { '115V': 4.4, '200V': 2.5, '230V': 2.2 }, trifasicos: {} },
  { hp: '1/4', monofasicos: { '115V': 5.8, '200V': 3.3, '230V': 2.9 }, trifasicos: {} },
  { hp: '1/3', monofasicos: { '115V': 7.2, '200V': 4.1, '230V': 3.6 }, trifasicos: {} },
  { hp: '1/2', monofasicos: { '115V': 9.8, '200V': 5.6, '230V': 4.9 }, trifasicos: { '200V': 2.3, '230V': 2.0, '460V': 1.0, '575V': 0.8 } },
  { hp: '3/4', monofasicos: { '115V': 13.8, '200V': 7.5, '230V': 6.9 }, trifasicos: { '200V': 3.2, '230V': 2.8, '460V': 1.4, '575V': 1.1 } },
  { hp: '1', monofasicos: { '115V': 16, '200V': 9.2, '230V': 8.4 }, trifasicos: { '200V': 4.2, '230V': 3.6, '460V': 1.8, '575V': 1.4 } },
  { hp: '1-1/2', monofasicos: { '115V': 20, '200V': 11.5, '230V': 10 }, trifasicos: { '200V': 6, '230V': 4.8, '460V': 2.4, '575V': 1.9 } },
  { hp: '2', monofasicos: { '115V': 24, '200V': 13.8, '230V': 12 }, trifasicos: { '200V': 7.6, '230V': 6.8, '460V': 3.4, '575V': 2.7 } },
  { hp: '3', monofasicos: { '115V': 34, '200V': 19.6, '230V': 17 }, trifasicos: { '200V': 11, '230V': 9.6, '460V': 4.8, '575V': 3.9 } },
  { hp: '5', monofasicos: { '115V': 56, '200V': 32.2, '230V': 28 }, trifasicos: { '200V': 17.5, '230V': 15.2, '460V': 7.6, '575V': 6.1 } },
  { hp: '7-1/2', monofasicos: {}, trifasicos: { '200V': 25.3, '230V': 22, '460V': 11, '575V': 8.8 } },
  { hp: '10', monofasicos: {}, trifasicos: { '200V': 32.2, '230V': 28, '460V': 14, '575V': 11 } },
  { hp: '15', monofasicos: {}, trifasicos: { '200V': 48.3, '230V': 42, '460V': 21, '575V': 17 } },
  { hp: '20', monofasicos: {}, trifasicos: { '200V': 62.1, '230V': 54, '460V': 27, '575V': 22 } },
  { hp: '25', monofasicos: {}, trifasicos: { '200V': 78.2, '230V': 68, '460V': 34, '575V': 27 } },
  { hp: '30', monofasicos: {}, trifasicos: { '200V': 92, '230V': 80, '460V': 40, '575V': 32 } },
  { hp: '40', monofasicos: {}, trifasicos: { '200V': 120, '230V': 104, '460V': 52, '575V': 41 } },
  { hp: '50', monofasicos: {}, trifasicos: { '200V': 150, '230V': 130, '460V': 65, '575V': 52 } },
  { hp: '60', monofasicos: {}, trifasicos: { '200V': 177, '230V': 154, '460V': 77, '575V': 62 } },
  { hp: '75', monofasicos: {}, trifasicos: { '200V': 221, '230V': 192, '460V': 96, '575V': 77 } },
  { hp: '100', monofasicos: {}, trifasicos: { '200V': 285, '230V': 248, '460V': 124, '575V': 99 } },
];

const cableGaugeRecommendation = (amperios) => {
  if (amperios <= 15) return '14 AWG';
  if (amperios <= 20) return '12 AWG';
  if (amperios <= 30) return '10 AWG';
  if (amperios <= 40) return '8 AWG';
  if (amperios <= 55) return '6 AWG';
  if (amperios <= 70) return '4 AWG';
  if (amperios <= 95) return '3 AWG';
  if (amperios <= 115) return '2 AWG';
  if (amperios <= 130) return '1 AWG';
  if (amperios <= 150) return '1/0 AWG';
  if (amperios <= 175) return '2/0 AWG';
  if (amperios <= 200) return '3/0 AWG';
  if (amperios <= 230) return '4/0 AWG';
  return 'Cable especial requerido';
};

// Datos de los componentes del arrancador
const componentsData = [
  {
    id: 1,
    title: 'Contactor',
    description: 'Un contactor de 3 polos es un dispositivo electromecánico utilizado para controlar y conmutar circuitos eléctricos de manera remota o automática. Está diseñado para manejar cargas trifásicas, como motores eléctricos, transformadores o resistencias, en sistemas de distribución de energía de 3 fases.',
    hoverDescription: 'Tres polos: Cuenta con tres contactos principales, uno para cada fase de la alimentación trifásica. ' +
      'Accionamiento electromagnético: Utiliza un electroimán para cerrar y abrir los contactos principales, permitiendo o interrumpiendo el flujo de corriente. ' +
      'Bobina de control: La bobina de control, alimentada por un voltaje de control (generalmente de 110 VAC o 220 VAC), activa el electroimán cuando se aplica tensión, cerrando los contactos principales. ' +
      'Contactos auxiliares: Puede incluir contactos auxiliares, normalmente abiertos (NA) o normalmente cerrados (NC), para señalizar el estado del contactor o para controlar circuitos de mando adicionales. ' +
      'Capacidad de corriente: Los contactores se clasifican según su capacidad de corriente nominal, que determina la cantidad máxima de corriente que pueden manejar de manera segura. ' +
      ' Resistencia a cortocircuitos: Los contactores están diseñados para soportar y cortar corrientes de cortocircuito, lo que los hace adecuados para aplicaciones industriales y comerciales.',
    imageUrl: 'https://static.weg.net/medias/images/h87/h32/GLOBAL_WDC_CONTACTOR_CWB_515Wx515H.webp',
  },
  {
    id: 2,
    title: 'Sobrecarga',
    description: 'Un relevador de sobrecarga de 3 polos es un dispositivo esencial en sistemas eléctricos que protege motores y otros equipos de daños causados por sobrecargas de corriente. Este tipo de relevador se utiliza principalmente en aplicaciones industriales y comerciales donde se requiere un control efectivo de la corriente eléctrica.',
    hoverDescription: `Tres polos: Diseñado para operar con sistemas trifásicos, el relevador cuenta con tres contactos que permiten monitorear cada fase de la corriente.`+`Protección contra sobrecargas: Su función principal es detectar condiciones de sobrecarga, es decir, cuando la corriente que pasa por el motor excede un nivel predeterminado. Esto se logra a través de un mecanismo bimetálico que se calienta con el aumento de la corriente.`+` Ajuste de corriente: Muchos relevadores permiten ajustes en el rango de corriente, lo que permite configurarlos según las especificaciones del motor o la carga que protegen. Por ejemplo, algunos modelos tienen rangos ajustables entre 22A y 32A o de 11A a 17A.` + ` Restablecimiento manual: Después de que el relevador se activa debido a una sobrecarga, generalmente requiere un restablecimiento manual para volver a poner en funcionamiento el sistema, lo que ayuda a prevenir daños adicionales al equipo.`
    ,
    imageUrl: 'https://static.weg.net/medias/images/h25/h1b/MKT_WDC_OVERLOADRELAYS_RW_515Wx515H.webp',
  },
  {
    id: 3,
    title: 'Arrancador Contactor + Sobrecarga',
    description: 'Un arrancador eléctrico para motor es un dispositivo esencial en el funcionamiento de motores eléctricos, diseñado para controlar su arranque y parada de manera segura y eficiente. Su función principal es proporcionar la energía inicial necesaria para vencer la resistencia estática del motor y ponerlo en marcha, evitando daños tanto al motor como al sistema eléctrico circundante.',
    hoverDescription:  `Control del Proceso de Arranque: Los arrancadores regulan la cantidad de corriente que fluye hacia el motor durante el arranque. Esto es crucial porque al encender un motor, este puede consumir una cantidad significativa de corriente, lo que puede causar picos de tensión y sobrecargas en el sistema eléctrico. El arrancador limita estos picos, protegiendo así al motor y a otros componentes eléctricos. ` + `Protección del Motor: Además de controlar el arranque, los arrancadores eléctricos también desempeñan un papel vital en la protección del motor contra sobrecargas y sobrecalentamientos. Esto prolonga la vida útil del motor y reduce los costos de mantenimiento al prevenir daños potenciales. ` + ` Adaptabilidad: Los arrancadores están disponibles en diversas capacidades y configuraciones para adaptarse a diferentes tipos de motores y aplicaciones, desde pequeños motores domésticos hasta grandes motores industriales. ` + ` En resumen, un arrancador eléctrico es fundamental para garantizar un arranque seguro y eficiente de los motores eléctricos, protegiéndolos contra condiciones adversas que podrían comprometer su funcionamiento y durabilidad.`
,
    imageUrl: 'https://maquitecdecolombia.com/wp-content/uploads/2021/04/Arrancador-WEG-vista-ppal-tamano-02-Vista-interior.jpg',
  },
  {
    id: 4,
    title: 'Guardamotor',
    description: 'Un guardamotor de 3 polos es un dispositivo eléctrico diseñado para proteger motores de corriente alterna (AC) contra condiciones adversas como sobrecargas, cortocircuitos y fallos de fase. Este componente es esencial en aplicaciones industriales y comerciales donde se requiere un control seguro y eficiente de motores eléctricos.',
    hoverDescription:  `Tres polos: El guardamotor está equipado con tres contactos, permitiendo la protección de cada una de las fases en un sistema trifásico.
    Protección termomagnética: Combina protección térmica y magnética. La protección térmica se activa en caso de sobrecarga prolongada, mientras que la protección magnética responde instantáneamente a un cortocircuito.` + ` Ajuste de corriente: Permite ajustar el rango de corriente nominal, lo que facilita su adaptación a diferentes motores. Esto asegura que el dispositivo se dispare adecuadamente en caso de sobrecarga.` + ` Reinicio manual o automático: Dependiendo del modelo, algunos guardamotores permiten un reinicio manual tras un disparo, mientras que otros pueden reiniciarse automáticamente una vez que la condición de sobrecarga se ha resuelto.` + ` Montaje versátil: Generalmente diseñado para un fácil montaje en riel DIN o mediante tornillos, lo que facilita su instalación en tableros eléctricos.` + ` Compatibilidad: Se utiliza en combinación con contactores para formar un sistema de control que garantiza la desconexión automática del motor en caso de fallos.` + `Aplicaciones: ` + ` Protección de motores eléctricos: Ideal para motores en sistemas de bombeo, ventilación, compresores y maquinaria industrial.` + ` Control de procesos: Integrado en sistemas de automatización, proporciona una solución completa para la gestión segura de motores.`
    ,
    imageUrl: 'https://static.weg.net/medias/images/h96/ha5/GLOBAL_WDC_MPW_515Wx515H.webp',
  },
  {
    id: 5,
    title: 'Arrancador Combinado Guardamotor + Contactor',
    description: 'Un arrancador eléctrico combinado con un guardamotor es un dispositivo integral diseñado para controlar y proteger motores eléctricos en diversas aplicaciones industriales. Este sistema combina las funciones de un contactor y un guardamotor, proporcionando tanto el arranque y parada del motor como la protección contra sobrecargas y cortocircuitos.',
    hoverDescription:  `Contactor: Es el componente principal que permite el paso de corriente al motor. Se activa mediante un circuito de control, permitiendo así iniciar o detener el motor de forma remota.` + ` Guardamotor: Este elemento actúa como un interruptor termomagnético, diseñado específicamente para proteger motores eléctricos. Su función principal es detectar condiciones anormales, como sobrecargas o cortocircuitos, y desconectar automáticamente la alimentación eléctrica para prevenir daños al motor. Los guardamotores son regulables y pueden adaptarse a diferentes intensidades de corriente, lo que los hace versátiles para diversas aplicaciones.` +  ` Control de Arranque y Parada: El arrancador permite iniciar y detener el motor de manera eficiente, facilitando su operación en diferentes condiciones de carga.
    Protección del Motor: El guardamotor protege el motor contra sobrecargas, cortocircuitos y, en algunos casos, falta de fase. Esto se logra mediante un sistema que combina un relé térmico y un disparador magnético, garantizando una respuesta rápida ante condiciones peligrosas.` + ` Integración de Componentes: Al combinar estas funciones en una sola unidad, se simplifica la instalación eléctrica y se reduce el espacio requerido en el panel de control. Esto también minimiza la necesidad de múltiples dispositivos separados, como relés térmicos e interruptores automáticos.` + ` Los arrancadores eléctricos combinados con guardamotores son utilizados en una amplia variedad de sectores industriales, como:` + `Manufactura: Para controlar motores en maquinaria pesada.
    Automatización: En sistemas automatizados donde se requiere un control preciso del arranque y parada de motores.
    Sistemas de bombeo: Para proteger bombas eléctricas contra fallas que podrían causar daños significativos.` + ` En resumen, un arrancador eléctrico combinado con un guardamotor es esencial para garantizar la operación segura y eficiente de motores eléctricos en entornos industriales, protegiendo tanto al equipo como a los operadores frente a fallas eléctricas.`
    ,
    imageUrl: 'https://static.weg.net/medias/images/he8/hf3/MPW_04.webp?cimgnr=FCZah',
  },
];

const Motores = () => {
  const [hp, setHp] = useState('');
  const [tipo, setTipo] = useState('');
  const [voltaje, setVoltaje] = useState('');
  const [selectedData, setSelectedData] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amperios = '-';
    const motor = motorData.find((m) => m.hp === hp);
    if (motor) {
      if (tipo === 'monofasico') {
        amperios = motor.monofasicos[voltaje] || '-';
      } else if (tipo === 'trifasico') {
        amperios = motor.trifasicos[voltaje] || '-';
      }
    }
    setSelectedData({ hp, tipo, voltaje, amperios, cable: cableGaugeRecommendation(amperios) });
  };

  const availableVoltages = tipo === 'monofasico'
    ? motorData.find((m) => m.hp === hp)?.monofasicos
    : motorData.find((m) => m.hp === hp)?.trifasicos;

  return (
    <div className="p-8 font-sans bg-gradient-to-r from-blue-900 to-green-200">
      <h1 className="text-3xl font-bold mb-4 text-center text-yellow-500">Calculadora de Amperios y Recomendación de Cable</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-md p-4 bg-white shadow-md rounded-lg">
        <div>
          <label htmlFor="hp" className="block text-sm font-medium text-gray-700">HP del motor</label>
          <select
            id="hp"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-green-500"
          >
            <option value="">Seleccione HP</option>
            {motorData.map((motor, index) => (
              <option key={index} value={motor.hp}>{motor.hp}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo de motor</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-green-500"
          >
            <option value="">Seleccione tipo</option>
            <option value="monofasico">Monofásico</option>
            <option value="trifasico">Trifásico</option>
          </select>
        </div>

        {availableVoltages && (
          <div>
            <label htmlFor="voltaje" className="block text-sm font-medium text-gray-700">Voltaje</label>
            <select
              id="voltaje"
              value={voltaje}
              onChange={(e) => setVoltaje(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-green-500"
            >
              <option value="">Seleccione voltaje</option>
              {Object.keys(availableVoltages).map((volt, index) => (
                <option key={index} value={volt}>{volt}</option>
              ))}
            </select>
          </div>
        )}

        <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Calcular</button>
      </form>

      {selectedData && (
        <div className="mt-6 p-4 border rounded bg-gray-100 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Resultados:</h2>
          <p style={{ textAlign: 'justify' }}><strong>HP:</strong> {selectedData.hp}</p>
          <p style={{ textAlign: 'justify' }}><strong>Tipo de Motor:</strong> {selectedData.tipo}</p>
          <p style={{ textAlign: 'justify' }}><strong>Voltaje:</strong> {selectedData.voltaje}</p>
          <p style={{ textAlign: 'justify' }}><strong>Amperios:</strong> {selectedData.amperios}</p>
          <p style={{ textAlign: 'justify' }}><strong>Recomendación de Cable:</strong> {selectedData.cable}</p>
        </div>
      )}

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">¡Conoce los Componentes de un Arrancador!</h2>
        <h3 className="mb-4 text-gray-600">Pasa el mouse sobre cada componente para leer más sobre él</h3>
        <div className="space-y-8">
          {componentsData.map((component) => (
            <div
              key={component.id}
              className="flex items-center space-x-4 justify-center shadow-md border border-gray-200 rounded-md bg-white transition-transform duration-200 hover:shadow-lg"
            >
              <div className="w-1/4 transition-transform duration-500 ease-in-out transform hover:scale-105">
                <img
                  src={component.imageUrl}
                  alt={component.title}
                  className="w-full h-auto object-contain rounded-md"
                  onMouseEnter={() => setHoveredComponent(component)}
                  onMouseLeave={() => setHoveredComponent(null)}
                />
              </div>
              <div className="w-3/4 p-4 border-l border-gray-300" style={{ textAlign: 'justify' }}>
                <h3 className="text-lg font-semibold">{component.title}</h3>
                {hoveredComponent?.id === component.id ? (
                  <div className="mt-2 space-y-2">
                    {hoveredComponent.hoverDescription.split('. ').map((line, index) => (
                      <p key={index}><strong>{line.trim().split(':')[0]}:</strong> {line.trim().split(':').slice(1).join(':')}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">{component.description.split('. ').map((line, index) => (
                    <span key={index}><strong>{line.trim().split(':')[0]}:</strong> {line.trim().split(':').slice(1).join(':')}.</span>
                  ))}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motores;