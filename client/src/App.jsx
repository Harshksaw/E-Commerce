import { Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';



import CustomerRouters from './Customer/Routers/CustomerRouters';




function App() {
  return (
    <div>
    

        <Routes>
            <Route path='/*' element={<CustomerRouters/>}></Route>
        </Routes>

        <Toaster/>


        




    </div>
  );
}
export default App;