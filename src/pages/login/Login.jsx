import './Login.scss'
import { Header } from '../../components/header/Header'

export const Login = () => {
  return (
    <div className='login'>
      <Header />
    
      <section className='login-container'>
        <h1>Acesse com seu login ou cadastre-se</h1>
        <p>você pode entrar com seu CPF</p>
        <div className="login-form">
          <form action="">
            <label htmlFor="name">Digite seu nome/CPF</label>
            <input type="text" name='name' id='name' placeholder='Nome completo' />
          
            <label htmlFor="password">Senha</label>
            <input type="password" name='password' id='password' placeholder='**********' />
          
            <button type='submit'>Entrar</button>
          </form>  
        </div>
      </section>
    </div>
  )
}
