import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from '../Screen/Signin';
import Signup from '../Screen/Signup';
import Dashboard from '../Components/Dashboard';
import Logout from '../Screen/Logout';
import Acceptor from '../Components/Acceptor';
import Donor from '../Components/Donor';
import DonorData from '../Components/DonorData';


const Routing = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/acceptor' element={<Acceptor />} />
            <Route path='/dashboard/donor' element={<Donor />} />
            <Route path='/donordata' element={<DonorData />} />
           

        </Routes>
      </BrowserRouter>
            
    </div>
  )
}

export default Routing