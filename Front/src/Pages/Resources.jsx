import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from "./Resources/MultiItem.jsx";
import Mat1 from "./Resources/Mat1.jsx";
import Mat2 from "./Resources/Mat2.jsx";
import Mat3 from "./Resources/Mat3.jsx";
import Mat4 from "./Resources/Mat4.jsx";
import Mat5 from "./Resources/Mat5.jsx";
import Mat6 from "./Resources/Mat6.jsx";

const Resources = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path='' element={<Grid />} />
           <Route path='Mat1' element={<Mat1/>} />
           <Route path='Mat2' element={<Mat2/>} />
           <Route path='Mat3' element={<Mat3/>} />
           <Route path='Mat4' element={<Mat4/>} />
           <Route path='Mat5' element={<Mat5/>} />
           <Route path='Mat6' element={<Mat6/>} />
         </Routes>
           </BrowserRouter>
    </div>
  )
}

export default Resources
