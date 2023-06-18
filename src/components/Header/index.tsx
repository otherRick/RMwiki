import { FinnTheHuman, HouseSimple, ShoppingCartSimple, Storefront } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navitate = useNavigate();
  return (
    <header
      className='hidden h-20 md:flex items-center justify-between pl-10 pr-10 w-full
   fixed bg-opacity-30 shadow-zinc-300 shadow-inner bg-gray-400
    '
    >
      <div className='flex flex-col w-16 h-16 bg-red-500 bg-opacity-30 items-center justify-center rounded-full'>
        <FinnTheHuman color='white' size={30} />
        {/* <p className='font'>RM</p>
        <p>Wiki</p> */}
      </div>
      <div className=' w-1/6 justify-between flex'>
        <div className=' flex flex-col items-center '>
          <HouseSimple color='white' size={20} />
          <button className='text-white' onClick={() => navitate('/')}>
            Home
          </button>
        </div>
        <div className=' flex flex-col items-center '>
          <Storefront color='white' size={20} />
          <button className='text-white' onClick={() => navitate('/shopping')}>
            Shop
          </button>
        </div>
        <div className=' flex flex-col items-center '>
          <ShoppingCartSimple color='white' size={20} />
          <button className='text-white' onClick={() => navitate('/cart')}>
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
