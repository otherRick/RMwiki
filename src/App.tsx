import { Provider } from 'react-redux';
import Routes from './routes';
import './styles/global.css';
import { store } from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
