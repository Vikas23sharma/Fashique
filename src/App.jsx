import Dashboard from './Admin/Dashboard';
import { SideBar } from './Admin/SideBar';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import { AdminHomePage } from './pages/AdminHomePage';
import { Navbar } from './pages/Navbar';
import { Women } from './pages/Women';


function App() {
  return (
    <div className='App'>
      {/* <SideBar/> */}
      <hr/>
      <hr/>
     
      <AllRoutes/>
      {/* <Dashboard/> */}
      {/* <Navbar/> 
       <Women/> */}
    </div>
  )
}

export default App;
