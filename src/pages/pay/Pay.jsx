import './Pay.scss'
import { useParams } from 'react-router-dom' 
import { useState } from 'react'
import { Link } from 'react-router-dom'
//Components
import { HeaderMenu } from '../../components/headerMenu/HeaderMenu'
import { Search } from '../../components/search/Search'


export const Pay = ({data}) => {
  const { payId } = useParams()
  const selectedProduct = data.find((item) => item.id == payId)

  const [selectedOption, setSelectedOption] = useState('')

  const handleCheckboxChange = (event) =>{
    const value = event.target.value
    setSelectedOption(value === selectedOption ? '' : value)
  }

  return (
    <section className='pay'>
      <HeaderMenu />
      <Search />
      <div className="pay-container">        
        <div className="pay-leftSide">
          <form action="">
            <label htmlFor="name" className='name'>Nome:</label>
            <input type="text" name='name' id='name' placeholder='Nome completo' required />
            
            <label htmlFor="address" className='address'>Endereço:</label>
            <input type="text" name='address' id='address' placeholder='Endereço de entrega' required />
            
            <div className="checkbox">
              <h1>Forma de pagamento:</h1>
              <div className="checkbox-list">
                <label><input type="checkbox" value="pix" checked={selectedOption === 'pix'} onChange={handleCheckboxChange}/>Pix</label>
                <br />
                <label><input type="checkbox" value="boleto" checked={selectedOption === 'boleto'} onChange={handleCheckboxChange}/>Boleto</label>
                <br />
                <label><input type="checkbox" value="cartao" checked={selectedOption === 'cartao'} onChange={handleCheckboxChange}/>Cartão de crédito</label>
              </div>
            </div>

            <Link to='/home' className='button-pay'>Enviar Pedido</Link>
          </form>
        </div>

        <div className="pay-rightSide">
            <h1>Resumo do pedido:</h1>
          <div className="pay-right-card">
            <div className="pay-price">
              <p>Produtos (1):</p>
              <span>{selectedProduct.price}</span>
            </div>
            <hr />
            <div className="pay-price">
              <p className='total'>Total:</p>
              <span>{selectedProduct.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
