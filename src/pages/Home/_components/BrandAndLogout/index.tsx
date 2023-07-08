import { useDispatch } from 'react-redux';
import PageBrand from '../../../../components/PageBrand';
import { loginSlice } from '../../../Login/slice/homeSlice';

export default function BrandAndLogout() {
  const dispatch = useDispatch();
  return (
    <div className='text-red-400 md:hidden justify-between w-full flex font-semibold fixed md:top-24 top-0 p-5 text-xs '>
      <PageBrand />
      <button
        onClick={() => dispatch(loginSlice.actions.setLogin({ registered: false }))}
        className='text-xs '
      >
        logout
      </button>
    </div>
  );
}
