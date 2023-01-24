import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import Dashboard from './Pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Index from './Pages/index';

function App() {
  return (
    <div className='App'>
      <Index/>
      {/* <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}

    </div>
  );
}

export default App;



