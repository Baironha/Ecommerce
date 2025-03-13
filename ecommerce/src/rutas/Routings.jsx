/* import React, { useState } from 'react'; */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from'../pages/Login';
import Trabajadores from '../pages/Trabajadores';
import Administracion from '../pages/Administracion';
import ReadMePage from '../pages/ReadMePage';



function Routing() {
    return (
        <div>
            <Router>
                <Routes>
                        
                            <Route path="/ReadMe" element={<ReadMePage/>}/>
                            <Route path="/Admin" element={<Administracion/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/Work" element={<Trabajadores/>}/>

                            
                </Routes>
            </Router>
        </div>
    );
}

export default Routing