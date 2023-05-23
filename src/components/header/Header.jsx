import Logo from '../../assets/logo-dnc.png'
import './Header.scss'

export const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo DNC" />
    </div>
  )
}
