import { useDispatch, useSelector } from 'react-redux';
import { Result } from '../Shop/services/getCharacters';
import { Trash } from '@phosphor-icons/react';
import { cartSlice } from './slice/cartSlice';

export default function Cart() {
  const carting = useSelector((state: any) => state.cartReducer);
  const dispatch = useDispatch();

  const onRemoveItem = (id: number) => {
    dispatch(cartSlice.actions.removeItemCart(id));
  };

  const onRemoveAll = () => {
    dispatch(cartSlice.actions.removeAllItemCart([]));
  };

  console.log(carting.data);

  return (
    <main className='bg-indigo-950 h-screen flex flex-col items-center justify-center'>
      <h1 className='text-indigo-50 font-semibold'>Cart</h1>
      <div className='bg-blue-500 w-96'>
        {carting.data.map(({ name, id, image }: Result) => (
          <div
            // onClick={() => onCardClick({ name, id, image })}
            className='bg-yellow-500 flex '
            key={id}
          >
            <img
              className='hover:opacity-50 transition duration-300 ease-in-out  md:w-6'
              src={image}
              alt={name}
            />
            <h1>{name}</h1>

            <Trash onClick={() => onRemoveItem(id)} />
          </div>
        ))}
      </div>
      <button onClick={onRemoveAll} className='text-white'>
        <Trash />
        Remove All Itens
      </button>
    </main>
  );
}
