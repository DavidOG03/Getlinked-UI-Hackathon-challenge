import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Header from "./components/header";
import "../dist/css/main.css";



function App() {

  useEffect(() => {
    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <>
      <BrowserRouter>
        <header className="navbar">
          <Header />
        </header>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
