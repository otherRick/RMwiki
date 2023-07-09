import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersThunk } from './slice/shopSlice';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Result } from './services/getCharacters';
import { cartSlice } from '../Cart/slice/cartSlice';

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const user = useSelector((state: any) => state.shopReducer);

  const pagesArray = [];

  for (let i = 1; i <= user.data.info.pages; i++) {
    pagesArray.push(i);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getCharactersThunk(currentPage));
  }, [currentPage, dispatch]);

  const onCardClick = (data) => {
    dispatch(cartSlice.actions.addItemCart(data));
  };
  return (
    <main className='bg-indigo-950 h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center w-4/6'>
        <CaretLeft
          className={`md:block hidden ${currentPage <= 1 ? 'hidden' : ''} fixed left-0`}
          onClick={() => setCurrentPage(currentPage - 1)}
          color='white'
          size={90}
        />
        <div className=' grid md:grid-flow-col md:grid-rows-3 gap-5'>
          {user?.data?.results?.map(({ name, id, image }: Result) => {
            return (
              <div
                onClick={() => onCardClick({ name, id, image })}
                className='bg-yellow-500 md:w-40 '
                key={id}
              >
                <img
                  className='hover:opacity-50 transition duration-300 ease-in-out'
                  src={image}
                  alt={name}
                />
                <h1>{name}</h1>
              </div>
            );
          })}
        </div>
        <CaretRight
          className={`md:block hidden fixed right-0`}
          onClick={() => setCurrentPage(currentPage + 1)}
          color='white'
          size={90}
        />
      </div>
      <div className='flex p-10 md:fixed bottom-10'>
        {pagesArray.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`text-white bg-opacity-30 shadow-zinc-300 shadow-inner w-8 ${
              page === currentPage ? 'bg-red-400' : 'bg-gray-400'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </main>
  );
}
