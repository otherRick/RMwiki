import { HouseSimple, ShoppingCartSimple, Storefront } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function TabNavigator() {
  const navigation = useNavigate();
  return (
    <div className='md:hidden flex justify-center bg-red-500'>
      <div className='p-2 md:w-1/6 w-3/6 bottom-20 rounded-2xl fixed items-center justify-evenly bg-opacity-30 shadow-zinc-300 shadow-inner flex bg-gray-400'>
        <button onClick={() => navigation('/')}>
          <HouseSimple
            size={30}
            className='  text-indigo-50 hover:text-indigo-400 font-semibold'
          />
        </button>
        <button onClick={() => navigation('/shop')}>
          <Storefront size={30} className='  text-indigo-50 hover:text-indigo-400 font-semibold' />
        </button>
        <button onClick={() => navigation('/cart')}>
          <ShoppingCartSimple
            size={30}
            className='  text-indigo-50 hover:text-indigo-400 font-semibold'
          />
        </button>
      </div>
    </div>
  );
}
