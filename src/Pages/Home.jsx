import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import Main from "../componentes/Main";

const Home = () => {

    const titulo  = "React JS"


    const nombres = ["Hugo", "Silvana", "Marcelo", "Agustin"]

    const [a, b, c, d] = nombres

    const datos = {
        nombre : "Agustin",
        apellido : "CC",
        dni : 42372443,
        resto : {
            sexo : "masculino",
            edad : 25
        }
    }

    return (
        <>
        <Header titulo = {titulo}/>
        <br />
        <Main saludo = "Este es un saludo de prueba"/>
        <br />
        <h2>Nombre: {a} {b} {c} {d}</h2>
        <br />
        <Footer/>
        <br />
        <h3>Dato asignado: {datos.dni}</h3>
        <h3>Otro dato es: {datos.resto.edad} años</h3>
        </>
    )
}

export default Home;