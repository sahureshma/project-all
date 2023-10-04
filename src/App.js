
import React from 'react';
import {  Routes, Route  } from 'react-router-dom';

import Warehouse from './Warehouse/Warehouse';
import Warehouselist from './Warehouselist/Warehouselist';
//import OtherComponent from './OtherComponent'; // Import other components as needed

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Warehouse/>}/>
        <Route path={"Warehouse/:id"} element={<Warehouselist/>}/>
    </Routes>
  );
}

export default App;
