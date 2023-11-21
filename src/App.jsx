import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>

      <Router>
        <div className="App">
          <Navbar />
          <Home/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;