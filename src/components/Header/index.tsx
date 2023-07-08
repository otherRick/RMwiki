import { HouseSimple, ShoppingCartSimple, Storefront } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import PageBrand from '../PageBrand';
import { useDispatch } from 'react-redux';
import { loginSlice } from '../../pages/Login/slice/homeSlice';

export default function Header() {
  const dispatch = useDispatch();
  const navitate = useNavigate();
  return (
    <header
      className='hidden h-20 md:flex items-center justify-between pl-10 pr-10 w-full
   fixed bg-opacity-30 shadow-zinc-300 shadow-inner bg-gray-400
    '
    >
      <PageBrand />
      <div className=' w-1/6 justify-between flex'>
        <div className=' flex flex-col items-center '>
          <HouseSimple color='white' size={20} />
          <button className='text-white' onClick={() => navitate('/')}>
            Home
          </button>
        </div>
        <div className=' flex flex-col items-center '>
          <Storefront color='white' size={20} />
          <button className='text-white' onClick={() => navitate('/shop')}>
            Shop
          </button>
        </div>
        <div className=' flex flex-col items-center '>
          <ShoppingCartSimple color='white' size={20} />
          <button className='text-white' onClick={() => navitate('/cart')}>
            Cart
          </button>
        </div>
        <button
          onClick={() => dispatch(loginSlice.actions.setLogin({ registered: true }))}
          className='text-xs text-red-400 '
        >
          logout
        </button>
      </div>
    </header>
  );
}
