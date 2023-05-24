import './ProductCard.scss'
import { Link } from 'react-router-dom'

export const ProductCard = ({data}) => {
  return (
    <div className='card'>
      <img src={data.imgPathDetail} alt="" />
      <h3>{data.title}</h3>
      <Link to='/products' className='button-card'>Comprar Look</Link>
    </div>
  )
}
