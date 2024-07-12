// import './App.css';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Layout from './Pages/Layout';
// import Contact from './Pages/Contact';
// import Myform from './components/Myform';
// import Car from './components/Car';
// import Object from './components/Object';
// import Services from './components/Services';
// import Update from './components/Update';
// import Header from './components/Header';
// import Myheader from './components/Myheader';
// import Hooks from './components/Hooks';
// import Usestate from './components/Usestate';
// import Hooks from './components/Hooks';
// import Child from './components/Child';
// import Restaurent from './Basics/Restaurent'
// import File1 from './Bootstrap/File1';
// import File2 from './Bootstrap/File2';
// import NewUsetate from "./components/NewUsetate
import link from "./practice/Link";
import Navbar from "./practice/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar link={link} />
      {/* <Header />
      <Update />
      <Myheader />
      <Hooks /> */}
      {/* <Restaurent /> */}
      {/* <Child /> */}
      {/* <File1 /> */}
      {/* <File2 /> */}
      {/* <NewUsetate /> */}
      {/* <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Myform />
      <Car />
      <Object />
      <Services /> */}
    </div>
  );
}

export default App;
