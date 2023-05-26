import { useParams } from 'react-router-dom' 
//Components
import { HeaderMenu } from '../../components/headerMenu/HeaderMenu'
import { Search } from '../../components/search/Search'
import { ProductDetail } from '../../components/productDetail/ProductDetail'


export const Products = ({data}) => {
  const {productId} = useParams()
  const selectedProduct = data.find((item) => item.id == productId)

  return (
    <section className='products'>
      <HeaderMenu />
      <Search />
      <ProductDetail data={selectedProduct} />
    </section>
  )
}
