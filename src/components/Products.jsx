import Carne from '../img/Carne.jpg'
import Carne2 from '../img/carne-2.jpg'
import Carne4 from '../img/carne-5.jpg'
import Carne3 from '../img/carne-4.jpg'

import '../styles/components/Products.sass'

const Products = () => {
  return (
    <>
      <div className="products">
        <div className="product">
          <h1>As Melhores Carnes</h1>
          <img src={Carne} alt="" />
        </div>
        <div className="product">
          <h1>O Melhor Resturante é a nossa casa</h1>
          <img src={Carne2} alt="" />
        </div>
        <div className="product">
          <h1>Cortes Exóticos</h1>
          <img src={Carne3} alt="" />
        </div>
        <div className="product">
          <h1>O Melhor Churrasco Começa Aqui</h1>
          <img src={Carne4} alt="" />
        </div>
      </div>    
    </>
  )
}

export default Products