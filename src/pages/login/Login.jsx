import './Login.scss'
import { Header } from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  //Submit conditions && navigate
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()

    const nameInput = document.querySelector('#name')
    const passwordInput = document.querySelector('#password')

    if(nameInput.value && passwordInput.value){
      navigate('/home')
    }else{
      alert('Preencha todos os campos!')
    }
  }

  return (
    <section className='login'>
      <Header />
      
      <div className='login-container'>
        <h1>Acesse com seu login ou cadastre-se</h1>
        <p>você pode entrar com seu CPF</p>
        <div className="login-form">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Digite seu nome/CPF</label>
            <input type="text" name='name' id='name' placeholder='Nome completo' required />
          
            <label htmlFor="password">Senha</label>
            <input type="password" name='password' id='password' placeholder='**********' required />
            
            <button type='submit' className='button-login'>Entrar</button>
          </form>  
        </div>
      </div>
    </section>
  )
}
