import { HouseSimple, ShoppingCartSimple, Storefront } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import PageBrand from '../PageBrand';
import { useDispatch, useSelector } from 'react-redux';
import { loginSlice } from '../../pages/Login/slice/homeSlice';

export default function Header() {
  const dispatch = useDispatch();
  const navitate = useNavigate();
  const useShop = useSelector((state: any) => state.cartReducer.data.length);

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
        <div
          onClick={() => navitate('/cart')}
          className=' cursor-pointer flex flex-col items-center '
        >
          <ShoppingCartSimple color='white' size={20} />
          <button className='text-white'>Cart</button>
          {useShop > 0 ? (
            <div className='w-3 h-3 items-center justify-center flex rounded-full bg-red-500 absolute '>
              <p className=' text-white text-xs'>{useShop}</p>
            </div>
          ) : null}
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
