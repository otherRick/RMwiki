import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { loginSlice } from './slice/homeSlice';

const loginFormSchema = z.object({
  name: z.string().nonempty(' Tell us your user name ').min(3).max(20),
  password: z
    .string()
    .nonempty('Password is required')
    .length(4, 'Oh, well look who forgot the password.')
});

type LoginFormProps = z.infer<typeof loginFormSchema>;

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormProps>({
    resolver: zodResolver(loginFormSchema)
  });

  function onEnter(data: any) {
    dispatch(loginSlice.actions.setLogin({ ...data, registered: true }));
  }

  return (
    <main className='bg-indigo-950 h-screen flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit(onEnter)} className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label htmlFor='name' className='text-indigo-50 font-semibold'>
            User
          </label>
          <input className='px-3 bg-white rounded' type='text' {...register('name')} />
          {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='name' className='text-indigo-50 font-semibold'>
            Password
          </label>
          <input className='px-3 bg-white rounded' type='text' {...register('password')} />
          {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
        </div>
        <button type='submit' className='bg-indigo-800 hover:bg-indigo-600 text-indigo-50'>
          Enter
        </button>
      </form>
    </main>
  );
}
