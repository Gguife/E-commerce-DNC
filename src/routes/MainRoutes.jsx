import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home/Home'
import { Login } from "../pages/login/Login";
import { Products } from '../pages/products/Products'
import { Pay } from '../pages/pay/Pay'
import { PRODUCTS_MOCK } from './../mock/productsMock'

export const MainRoutes = () =>{
  const routes = useRoutes([
    {path: '/', element: <Login />},
    {path: '/home', element: <Home data={PRODUCTS_MOCK} />},
    {path: '/products/:productId', element: <Products data={PRODUCTS_MOCK} />},
    {path: '/pay/:payId', element: <Pay data={PRODUCTS_MOCK} />},
  ])

  return routes
}