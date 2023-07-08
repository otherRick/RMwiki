import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TabNavigator from '../components/TabNavigator';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Header from '../components/Header';

export default function PrivateRoute() {
  return (
    <BrowserRouter>
      <TabNavigator />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
