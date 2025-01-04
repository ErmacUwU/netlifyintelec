import React from 'react';

const Historia = () => {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-gray-100">
      {/* Título principal */}
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Historia y Extensión Comunitaria
      </h1>

      {/* Imagen del negocio */}
      <div className="w-full flex justify-center mb-8">
        <img
          src="images/foto.jfif"
          alt="Foto del negocio"
          className="rounded-lg shadow-lg max-w-[500px] h-auto"
        />
      </div>


      {/* Historia */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Nuestra Historia</h2>
        <p className="text-lg text-gray-700">
          <strong>INTELEC</strong> es una empresa familiar establecida en 2011 en la ciudad de Ensenada, Baja California. En nuestro año de inicio estuvimos ubicados en la Colonia Granados y contábamos con dos empleados y un Gerente General. En 2012 fue necesario mudarnos a un local más grande que incluyera espacio para un taller de integración. Nuestro domicilio actual está, desde entonces, ubicado en el Fracc. Buenaventura. En estos años de operación hemos dado empleo a más de 15 personas. INTELEC es una empresa responsable que va más allá del cumplimiento con todas las prestaciones laborales de ley y promueve el crecimiento de sus empleados.
        </p>
      </section>

      {/* Apoyo a estudiantes */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Apoyo a Estudiantes Convenio con el ITE (Instituto Tecnológico de Ensenada)
        </h2>
        <p className="text-lg text-gray-700">
          En 2019 establecimos el primer convenio de colaboración con el ITE para apoyar a estudiantes en la realización de su servicio social, prácticas profesionales y/o residencias. Estos estudiantes reciben un apoyo económico durante su estadía equivalente al salario mínimo vigente y algunos han sido contratados como empleados por nuestra empresa al final de sus proyectos escolares. De esta manera nuestra empresa contribuye al desarrollo profesional de estudiantes por egresar al integrarlos a un ambiente de trabajo inclusivo que fomenta el aprendizaje.
        </p>
      </section>

      {/* Patrocinio de eventos deportivos */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Patrocinio de Eventos Deportivos
        </h2>
        <p className="text-lg text-gray-700">
          También hemos apoyado el desarrollo de jóvenes deportistas a través del financiamiento de uniformes y otros insumos a clubes de fútbol de nuestra ciudad, tanto varoniles como femeniles.
        </p>
      </section>

      {/* Responsabilidad ambiental */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Responsabilidad con el Cuidado del Ambiente
        </h2>
        <p className="text-lg text-gray-700">
          En INTELEC separamos residuos plásticos, cartón, aluminio y papel para llevarlos a lugares de reciclaje y no generar tantos desechos.
        </p>
      </section>
    </div>
  );
};

export default Historia;
