import './Search.scss'
import SearchIcon from '../../assets/search.png'
import Like from '../../assets/like.png'
import Profile from '../../assets/user.png'

export const Search = () => {

  return (
    <div className="search">
      <div className="search-input">
        <input type="search" id='search' placeholder='O que você está procurando?' />
        <span><img src={SearchIcon} alt="Search" /></span>
      </div>
      <div className="icons">
        <img src={Profile} alt="Profile" />
        <img src={Like} alt="Like" />
      </div>
    </div>
  )
}
