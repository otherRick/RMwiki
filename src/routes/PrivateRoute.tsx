import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TabNavigator from '../components/TabNavigator';
import Shopping from '../pages/Shopping';
import Cart from '../pages/Cart';
import Header from '../components/Header';

export default function PrivateRoute() {
  return (
    <BrowserRouter>
      <TabNavigator />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
