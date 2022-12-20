import Home from '../img/Home.jpg'
import '../styles/components/About.sass'

const About = () => {
  return (
    <>
    <div className="about">
      <h1>A Melhor Casa de Carnes da Região</h1>
      <h2>Os melhores Bovinos, Áves e Suínos </h2>
      <div className="image">
        <img src={Home} alt="" />
        <h3>Cortes para churrascos Uruguaios e Argentinos</h3>
        <h3>Segunda a Sexta (7:00 às 20:00)</h3>
        <h3>Sábado (7:00 às 17:00)</h3>
      </div>
    </div>
    </>
  )
}

export default About