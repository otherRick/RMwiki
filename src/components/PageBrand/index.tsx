import { FinnTheHuman } from '@phosphor-icons/react';

interface PageBrandProps {
  hidden?: boolean;
}

export default function PageBrand({ hidden }: PageBrandProps) {
  return (
    <div
      className={` ${
        hidden ? 'hidden' : ''
      }flex flex-col w-16 h-16 bg-red-500 bg-opacity-30 items-center justify-center rounded-full`}
    >
      <FinnTheHuman color='white' size={30} />
      {/* <p className='font'>RM</p>
        <p>Wiki</p> */}
    </div>
  );
}
