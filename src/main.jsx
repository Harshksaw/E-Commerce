

import './index.css'
import App from './App'


import { Provider } from 'react-redux'
import { store } from './redux/Store';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const root = createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter>

    <ToastContainer/>

  <Provider store={store}>
    <App/>
  </Provider>

  </BrowserRouter>
);
