import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function Routes() {
  const user = useSelector((state: any) => state.loginReducer);

  console.log('usdasdasdser', user.registered);

  return user.registered ? <PrivateRoute /> : <PublicRoute />;
}
