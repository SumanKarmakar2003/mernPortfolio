import React from "react";
import './App.css';
import Home from "./Home.js";
import Gallery from "./Gallery.js";
import Blog from "./Blog.js";
import Contact from "./Contact.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mainheader from "./Mainheader";
import Error from "./Error";

function App() {
  return (
    <>
     <Router>
       <Routes>
        <Route  path="/" element={<Mainheader />}>
        <Route index element={<Home />}/> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> 
        </Route>
        <Route path="*" element={<Error />} />
     </Routes>
     </Router>
    </>
  );
}

export default App;
