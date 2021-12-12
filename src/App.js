import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { createContext, useState } from 'react';
import AllRoutes from './Components/AllRoutes/AllRoutes';


export const productContext = createContext();

function App() {
  const [carryProduct, setCarryProduct] = useState({});
  return (
    <div className="App">
      <productContext.Provider value={[carryProduct, setCarryProduct]}>
        <Router>
              <AllRoutes/>
        </Router>
      </productContext.Provider>
     
    </div>
  );
}

export default App;
