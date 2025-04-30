const Aside = ({ saludo, equipos }) => {
    return (
    <>
        <br />
        <h2>Este es el aside de una web</h2>
        <br />
        <h4>Saludo de prueba: {saludo}</h4>
        <br />
        <ul>
        {equipos.map((equipo, index) => <li key={index}>{equipo}</li>)}
        </ul>
    </>
  );
};

export default Aside;
