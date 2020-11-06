import React from 'react';
import './App.css';
import { Profile } from "./component/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="center">
    <Profile/>
    <ToastContainer/>
    </div>
  );
}

export default App;
