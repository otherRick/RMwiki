import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

export default function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
