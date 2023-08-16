
import { useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/FooterSec';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import AllRoutes from './Routes/AllRoutes';
import './index.css'
function App() {
 
  return (
    <div as="body" className="App">
   <Navbar />
   <AllRoutes />
   <Footer />
    </div>
  );
}

export default App;
