import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signin from '../Screen/user.signin';
import SignupOne from '../Screen/user.signupOne';
import SignupTwo from '../Screen/user.signupTwo';
import Dashboard from '../Components/Dashboard';
import Logout from '../Screen/user.logout';
import Acceptor from '../Components/Acceptor';
import Donor from '../Components/Donor';
import DonorData from '../Components/DonorData';
import ThanksDonor from '../Components/thanks.donor';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/v2/si12nup345/fo87rm7280008788" />} />
      <Route path="/v2/si12nup345/fo87rm7280008788" element={<SignupOne />} />

      <Route path="/signup345Two/fo87rm7280008788" element={<SignupTwo />} />
      <Route path='/signin/fo87rm7280008788' element={<Signin />} />
      <Route path='/logout/:userId' element={<Logout />} />
      <Route path='/dashboard/:userId' element={<Dashboard />} />
      {/* <Route path='/dashboard/acceptor' element={<Acceptor />} />
      <Route path='/dashboard/donor' element={<Donor />} /> */}
      <Route path='/donordata' element={<DonorData />} />
      <Route path='/donordata/thanks' element={<ThanksDonor />} />
    </Routes>
  );
}



export default Routing;
