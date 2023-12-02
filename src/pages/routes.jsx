import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Firstpg from './Firstpg';
import Secondpg from './Secondpg';
import Thirdpg from './Thirdpg';

const routes = (
  <BrowserRouter>
  <Routes>
    <Route path="/firstpg" element={<Firstpg />} />
    <Route path="/secondpg" element={<Secondpg />} />
    <Route path="/thirdpg" element={<Thirdpg />} />
  </Routes>
  </BrowserRouter>
);

export default routes;
