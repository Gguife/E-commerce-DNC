import Logo from '../../assets/logo-dnc.png'
import Cart from '../../assets/cart.png'
import MenuMobile from '../../assets/menu.svg'
import Close from '../../assets/close.svg'
import { Link } from 'react-router-dom'
import './HeaderMenu.scss'

export const HeaderMenu = () => {

  const handleMobileOpen = () =>{
    const mobile = document.querySelector('.menu-mobile')

    mobile.style.display = 'flex'
  }

  const handleMobileClose = () =>{
    const mobile = document.querySelector('.menu-mobile')

    mobile.style.display = 'none'
  }

  return (
    <div className="header header-menu">
      <img src={Logo} alt="Logo DNC" className='logo' />
      <div className="menu">
        <ul>
          <li><a href="/home" className='active'>Home</a></li>
          <li><a href="/home">Novidade</a></li>
          <li><a href="/home">Feminino</a></li>
          <li><a href="/home">Masculino</a></li>
          <li><a href="/home">atendimento</a></li>
        </ul>
      </div>
      <div className="menu-cart">
        <Link to='/home'>
          <p>Meu carrinho</p>
        </Link>
          <img src={Cart} alt="" className='cart'/>
      </div>

      <img src={MenuMobile} alt="" className='menu-open' onClick={handleMobileOpen}/>
      
      <div className="menu-mobile">
        <img src={Close} alt="" className='menu-close' onClick={handleMobileClose} />  

        <div className="menu-mobile-nav">
          <ul>
            <li><a href="/home" className='active'>Home</a></li>
            <li><a href="/home">Novidade</a></li>
            <li><a href="/home">Feminino</a></li>
            <li><a href="/home">Masculino</a></li>
            <li><a href="/home">atendimento</a></li>
          </ul>
        </div>
        
        <div className="menu-cart-nav">
          <Link to='/home'>
            <p>Meu carrinho</p>
          </Link>
            <img src={Cart} alt="" className='cart'/>
        </div>
      </div>
    </div>
  )
}
