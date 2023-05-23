import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home/Home'
import { Login } from "../pages/login/Login";
import { Products } from '../pages/products/Products'
import { Pay } from '../pages/pay/Pay'

export const MainRoutes = () =>{
  const routes = useRoutes([
    {path: '/', element: <Login />},
    {path: '/home', element: <Home />},
    {path: '/products/:productId', element: <Products />},
    {path: '/pay/:payId', element: <Pay />},

  ])

  return routes
}