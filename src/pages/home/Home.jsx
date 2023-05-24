import './Home.scss'
import { HeaderMenu } from '../../components/headerMenu/HeaderMenu'
import { Search } from '../../components/search/Search'
import { ProductCard } from '../../components/productCard/ProductCard'

export const Home = ({data}) => {
  
  return (
    <section className='home'>
      <HeaderMenu />
      
      <Search />
      
      <div className="home-container">
        {data.map((item, key) => (<ProductCard key={key} data={item} />))}
      </div>
    </section>
  )
}
