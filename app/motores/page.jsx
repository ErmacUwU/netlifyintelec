"use client";
import React, { useState } from "react";

// Datos de la tabla de motores
const motorData = [
  { hp: "1/6", monofasicos: { "115V": 4.4, "200V": 2.5, "230V": 2.2 }, trifasicos: {} },
  { hp: "1/4", monofasicos: { "115V": 5.8, "200V": 3.3, "230V": 2.9 }, trifasicos: {} },
  { hp: "1/3", monofasicos: { "115V": 7.2, "200V": 4.1, "230V": 3.6 }, trifasicos: {} },
  { hp: "1/2", monofasicos: { "115V": 9.8, "200V": 5.6, "230V": 4.9 }, trifasicos: { "200V": 2.3, "230V": 2.0, "460V": 1.0, "575V": 0.8 } },
  { hp: "3/4", monofasicos: { "115V": 13.8, "200V": 7.5, "230V": 6.9 }, trifasicos: { "200V": 3.2, "230V": 2.8, "460V": 1.4, "575V": 1.1 } },
  { hp: "1", monofasicos: { "115V": 16, "200V": 9.2, "230V": 8.4 }, trifasicos: { "200V": 4.2, "230V": 3.6, "460V": 1.8, "575V": 1.4 } },
  { hp: "1-1/2", monofasicos: { "115V": 20, "200V": 11.5, "230V": 10 }, trifasicos: { "200V": 6, "230V": 4.8, "460V": 2.4, "575V": 1.9 } },
  { hp: "2", monofasicos: { "115V": 24, "200V": 13.8, "230V": 12 }, trifasicos: { "200V": 7.6, "230V": 6.8, "460V": 3.4, "575V": 2.7 } },
  { hp: "3", monofasicos: { "115V": 34, "200V": 19.6, "230V": 17 }, trifasicos: { "200V": 11, "230V": 9.6, "460V": 4.8, "575V": 3.9 } },
  { hp: "5", monofasicos: { "115V": 56, "200V": 32.2, "230V": 28 }, trifasicos: { "200V": 17.5, "230V": 15.2, "460V": 7.6, "575V": 6.1 } },
  { hp: "7-1/2", monofasicos: {}, trifasicos: { "200V": 25.3, "230V": 22, "460V": 11, "575V": 8.8 } },
  { hp: "10", monofasicos: {}, trifasicos: { "200V": 32.2, "230V": 28, "460V": 14, "575V": 11 } },
  { hp: "15", monofasicos: {}, trifasicos: { "200V": 48.3, "230V": 42, "460V": 21, "575V": 17 } },
  { hp: "20", monofasicos: {}, trifasicos: { "200V": 62.1, "230V": 54, "460V": 27, "575V": 22 } },
  { hp: "25", monofasicos: {}, trifasicos: { "200V": 78.2, "230V": 68, "460V": 34, "575V": 27 } },
  { hp: "30", monofasicos: {}, trifasicos: { "200V": 92, "230V": 80, "460V": 40, "575V": 32 } },
  { hp: "40", monofasicos: {}, trifasicos: { "200V": 120, "230V": 104, "460V": 52, "575V": 41 } },
  { hp: "50", monofasicos: {}, trifasicos: { "200V": 150, "230V": 130, "460V": 65, "575V": 52 } },
  { hp: "60", monofasicos: {}, trifasicos: { "200V": 177, "230V": 154, "460V": 77, "575V": 62 } },
  { hp: "75", monofasicos: {}, trifasicos: { "200V": 221, "230V": 192, "460V": 96, "575V": 77 } },
  { hp: "100", monofasicos: {}, trifasicos: { "200V": 285, "230V": 248, "460V": 124, "575V": 99 } },
];

const cableGaugeRecommendation = (amperios) => {
  if (amperios <= 15) return "14 AWG";
  if (amperios <= 20) return "12 AWG";
  if (amperios <= 30) return "10 AWG";
  if (amperios <= 40) return "8 AWG";
  if (amperios <= 55) return "6 AWG";
  if (amperios <= 70) return "4 AWG";
  if (amperios <= 95) return "3 AWG";
  if (amperios <= 115) return "2 AWG";
  if (amperios <= 130) return "1 AWG";
  if (amperios <= 150) return "1/0 AWG";
  if (amperios <= 175) return "2/0 AWG";
  if (amperios <= 200) return "3/0 AWG";
  if (amperios <= 230) return "4/0 AWG";
  return "Cable especial requerido";
};

const componentsData = [
  {
    id: 1,
    title: "Contactor",
    description:
      "Un contactor de 3 polos es un dispositivo electromecánico utilizado para controlar y conmutar circuitos eléctricos de manera remota o automática.",
    hoverDescription:
      "Tres polos: Cuenta con tres contactos principales, uno para cada fase de la alimentación trifásica. " +
      "Accionamiento electromagnético: Utiliza un electroimán para cerrar y abrir los contactos principales.",
    imageUrl:
      "https://static.weg.net/medias/images/h87/h32/GLOBAL_WDC_CONTACTOR_CWB_515Wx515H.webp",
  },
  {
    id: 2,
    title: "Sobrecarga",
    description:
      "Un relevador de sobrecarga de 3 polos es un dispositivo esencial en sistemas eléctricos que protege motores y otros equipos de daños causados por sobrecargas de corriente.",
    hoverDescription:
      "Tres polos: Diseñado para operar con sistemas trifásicos, el relevador cuenta con tres contactos que permiten monitorear cada fase de la corriente. " +
      "Protección contra sobrecargas: Detecta condiciones de sobrecarga mediante un mecanismo bimetálico que se calienta con el aumento de la corriente. " +
      "Ajuste de corriente: Muchos relevadores permiten ajustes en el rango de corriente, configurándose según las especificaciones del motor o la carga.",
    imageUrl:
      "https://static.weg.net/medias/images/h25/h1b/MKT_WDC_OVERLOADRELAYS_RW_515Wx515H.webp",
  },
  {
    id: 3,
    title: "Arrancador Contactor + Sobrecarga",
    description:
      "Un arrancador eléctrico para motor es un dispositivo esencial en el funcionamiento de motores eléctricos, diseñado para controlar su arranque y parada de manera segura y eficiente.",
    hoverDescription:
      "Control del proceso de arranque: Los arrancadores regulan la cantidad de corriente que fluye hacia el motor durante el arranque, evitando picos de tensión y sobrecargas. " +
      "Protección del motor: Controlan el arranque y protegen contra sobrecargas y sobrecalentamientos, prolongando la vida útil del motor. " +
      "Adaptabilidad: Disponibles en diversas capacidades y configuraciones para diferentes tipos de motores y aplicaciones.",
    imageUrl:
      "https://maquitecdecolombia.com/wp-content/uploads/2021/04/Arrancador-WEG-vista-ppal-tamano-02-Vista-interior.jpg",
  },
  {
    id: 4,
    title: "Guardamotor",
    description:
      "Un guardamotor de 3 polos es un dispositivo eléctrico diseñado para proteger motores de corriente alterna (AC) contra condiciones adversas como sobrecargas, cortocircuitos y fallos de fase.",
    hoverDescription:
      "Tres polos: El guardamotor está equipado con tres contactos, permitiendo la protección de cada una de las fases en un sistema trifásico. " +
      "Protección termomagnética: Combina protección térmica y magnética para responder a sobrecargas prolongadas o cortocircuitos instantáneamente. " +
      "Ajuste de corriente: Permite ajustar el rango de corriente nominal, asegurando que el dispositivo se dispare adecuadamente en caso de sobrecarga.",
    imageUrl:
      "https://static.weg.net/medias/images/h96/ha5/GLOBAL_WDC_MPW_515Wx515H.webp",
  },
  {
    id: 5,
    title: "Arrancador Combinado Guardamotor + Contactor",
    description:
      "Un arrancador eléctrico combinado con un guardamotor es un dispositivo integral diseñado para controlar y proteger motores eléctricos en diversas aplicaciones industriales.",
    hoverDescription:
      "Contactor: Permite el paso de corriente al motor mediante un circuito de control. " +
      "Guardamotor: Actúa como un interruptor termomagnético, diseñado específicamente para proteger motores eléctricos contra sobrecargas o cortocircuitos. " +
      "Control de arranque y parada: Facilita la operación segura y eficiente del motor en diferentes condiciones de carga. " +
      "Integración de componentes: Simplifica la instalación eléctrica y reduce el espacio requerido en el panel de control.",
    imageUrl:
      "https://static.weg.net/medias/images/he8/hf3/MPW_04.webp?cimgnr=FCZah",
  },
];


const Motores = () => {
  const [hp, setHp] = useState("");
  const [tipo, setTipo] = useState("");
  const [voltaje, setVoltaje] = useState("");
  const [selectedData, setSelectedData] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amperios = "-";
    const motor = motorData.find((m) => m.hp === hp);
    if (motor) {
      if (tipo === "monofasico") {
        amperios = motor.monofasicos[voltaje] || "-";
      } else if (tipo === "trifasico") {
        amperios = motor.trifasicos[voltaje] || "-";
      }
    }
    setSelectedData({ hp, tipo, voltaje, amperios, cable: cableGaugeRecommendation(amperios) });
  };

  const availableVoltages =
    tipo === "monofasico"
      ? motorData.find((m) => m.hp === hp)?.monofasicos
      : motorData.find((m) => m.hp === hp)?.trifasicos;

  return (
    <div className="p-8 font-sans bg-gradient-to-r from-blue-900 to-green-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-yellow-500">
        Calculadora de Amperios y Recomendación de Cable
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mx-auto max-w-md p-4 bg-white shadow-md rounded-lg"
      >
        <div>
          <label htmlFor="hp" className="block text-sm font-medium text-gray-700">
            HP del motor
          </label>
          <select
            id="hp"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-green-500"
          >
            <option value="">Seleccione HP</option>
            {motorData.map((motor, index) => (
              <option key={index} value={motor.hp}>
                {motor.hp}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
            Tipo de motor
          </label>
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
            <label htmlFor="voltaje" className="block text-sm font-medium text-gray-700">
              Voltaje
            </label>
            <select
              id="voltaje"
              value={voltaje}
              onChange={(e) => setVoltaje(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-green-500"
            >
              <option value="">Seleccione voltaje</option>
              {Object.keys(availableVoltages).map((volt, index) => (
                <option key={index} value={volt}>
                  {volt}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Calcular
        </button>
      </form>

      {selectedData && (
        <div className="mt-6 p-4 border rounded bg-gray-100 shadow-md leading-relaxed">
          <h2 className="text-xl font-semibold mb-2">Resultados:</h2>
          <p className="text-justify">
            <strong>HP:</strong> {selectedData.hp}
          </p>
          <p className="text-justify">
            <strong>Tipo de Motor:</strong> {selectedData.tipo}
          </p>
          <p className="text-justify">
            <strong>Voltaje:</strong> {selectedData.voltaje}
          </p>
          <p className="text-justify">
            <strong>Amperios:</strong> {selectedData.amperios}
          </p>
          <p className="text-justify">
            <strong>Recomendación de Cable:</strong> {selectedData.cable}
          </p>
        </div>
      )}

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">
          ¡Conoce los Componentes de un Arrancador!
        </h2>
        <h3 className="mb-4 text-gray-600">
          Pasa el mouse sobre cada componente para leer más sobre él
        </h3>
        <div className="grid grid-cols-1 gap-6">
  {componentsData.map((component) => (
    <div
      key={component.id}
      className="shadow-lg p-4 overflow-hidden rounded-lg bg-white transition-transform duration-200 hover:shadow-2xl flex flex-col justify-center items-center min-h-[380px]"
    >
      {/* Contenedor de Imagen con Proporción */}
<div
  className="aspect-w-4 aspect-h-3 w-full flex justify-center items-center overflow-hidden"
  onMouseEnter={() => setHoveredComponent(component)}
  onMouseLeave={() => {
    window.hoverTimeout = setTimeout(() => setHoveredComponent(null), 300); // Retraso de 300ms al salir
  }}
  onMouseMove={() => clearTimeout(window.hoverTimeout)} // Cancela el retraso si el mouse regresa rápidamente
>
  <img
    src={component.imageUrl}
    alt={component.title}
    className="object-contain rounded-md max-h-56"
  />
</div>


      {/* Contenedor de Texto */}
      <div className="mt-4 text-center flex flex-col items-center overflow-hidden">
  <h3 className="text-lg font-semibold mb-2">
    {component.title}
  </h3>
  <p className="text-sm text-gray-600 leading-relaxed break-words">
  {hoveredComponent?.id === component.id
    ? hoveredComponent.hoverDescription.split('. ').map((line, index) => {
        const [boldText, ...rest] = line.split(':');
        return (
          <span key={index} className="block mt-2">
            <strong>{boldText.trim()}:</strong> {rest.join(':').trim()}
          </span>
        );
      })
    : component.description}
</p>

</div>

    </div>
  ))}
</div>





      </div>
    </div>
  );
};

export default Motores;
