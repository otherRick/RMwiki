import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function Routes() {
  const user = useSelector((state: any) => state.loginReducer);

  return user.registered ? <PrivateRoute /> : <PublicRoute />;
}
