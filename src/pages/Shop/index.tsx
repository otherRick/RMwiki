import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersThunk } from './slice/shopSlice';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Result } from './services/getCharacters';

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
  return (
    <main className='bg-indigo-950 h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center w-4/6'>
        <CaretLeft
          className={`${currentPage <= 1 ? 'hidden' : ''} fixed left-0`}
          onClick={() => setCurrentPage(currentPage - 1)}
          color='white'
          size={90}
        />
        <div className=' grid grid-flow-col grid-rows-3 gap-5'>
          {user?.data?.results?.map(({ name, id, image }: Result) => {
            return (
              <div className='bg-yellow-500 w-40' key={id}>
                <img src={image} alt={name} />
                <h1>{name}</h1>
              </div>
            );
          })}
        </div>
        <CaretRight
          className={`fixed right-0`}
          onClick={() => setCurrentPage(currentPage + 1)}
          color='white'
          size={90}
        />
      </div>
      <div className='flex'>
        {pagesArray.map((page) => (
          <button
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
