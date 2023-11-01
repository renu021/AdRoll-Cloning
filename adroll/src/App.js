import { Route, Routes} from "react-router-dom"
import './index.css';

import Home from './Router/Home'
import Login from './Router/login'


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login/>} />
       
      </Routes>
  
    </div>
  );
}

export default App;
