

import './index.css'
import App from './App'


import { Provider } from 'react-redux'
import { store } from './Customer/redux/Store';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';



const root = createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter>


  
  <Provider store={store}>
    <App/>

  </Provider>

  </BrowserRouter>
);
