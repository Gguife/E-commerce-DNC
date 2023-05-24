import './ProductCard.scss'
import { Link } from 'react-router-dom'

export const ProductCard = ({data}) => {
  return (
    <div className='card'>
      <img src={data.imgPath} alt="" />
      <h3>{data.title}</h3>
      <Link to={`/products/${data.id}`} className='button-card'>Comprar Look</Link>
    </div>
  )
}
