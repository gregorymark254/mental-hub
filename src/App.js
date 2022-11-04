import Home from './pages/Home'
import About from './pages/About'
import Support from './pages/Support'
import Contact from './pages/Contact'
import Header from './pages/Header'
import Nav from './pages/Nav'
import Footer from './pages/Footer'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/support" element={<Support/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
