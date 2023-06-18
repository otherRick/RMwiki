import { useDispatch, useSelector } from 'react-redux';
import { loginSlice } from '../Login/slice/homeSlice';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.loginReducer);
  const navigate = useNavigate();

  return (
    <main className='bg-zinc-800 h-screen flex flex-col items-center justify-center'>
      <button
        onClick={() => dispatch(loginSlice.actions.setLogin({ registered: false }))}
        className='text-red-400 font-semibold fixed md:top-24 top-5 right-10 text-xs '
      >
        logout
      </button>

      <body className='items-center flex flex-col'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-white md:text-4xl text-lg font-bold'>Welcome to RM Wiki</h1>
          <p className='text-white md:text-xl text-xs font-semibold'>
            The best place to find all your Rick and Morty needs
          </p>
        </div>
        <div
          className='
        flex flex-col md:flex-row items-center justify-center
        '
        >
          <img
            className=' w-6/12 object-cover rounded-xl shadow-zinc-300 shadow-inner bg-gray-400 md:mr-10 mt-10 '
            src='https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/rick_and_morty_anime__ri461wle-1210x544.jpg'
            alt='rick and morty'
          />
        </div>
        <button
          onClick={() => navigate('/shopping')}
          className='
          bg-zinc-500 hover:bg-zinc-400
          text-white font-bold py-2 px-4 rounded
          mt-10
          '
        >
          Go Shopping
        </button>
      </body>
      <footer
        className='
     hidden md:flex flex-col items-center justify-center
      w-full h-20
      fixed bottom-0

      '
      >
        <div className='flex items-center justify-center gap-4'>
          <p className='text-white text-xs font-semibold'>
            Created by{' '}
            <a
              className='text-blue-400 hover:text-blue-300'
              href='https://www.linkedin.com/in/derick-abreu-b59a5223b/
            '
              target='_blank'
              rel='noreferrer'
            >
              Derick Abreu
            </a>
          </p>
          <InstagramLogo className='text-white md:text-xl text-xs font-semibold' />
          <LinkedinLogo className='text-white md:text-xl text-xs font-semibold' />
          <GithubLogo className='text-white md:text-xl text-xs font-semibold' />
        </div>
      </footer>
    </main>
  );
}
