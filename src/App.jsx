import { lazy, useEffect, useState } from 'react'
import { Suspense } from 'react'
import PropTypes from 'prop-types';

import './App.css'
import "../src/Styles/Loader.css"
const HomePage = lazy(() => import('./Pages/HomePage'))
// import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Headroom from 'react-headroom'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ModalProvider } from './Components/ModalContext';
import MaintainenceModel from './Components/MaintainenceModel';


const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

    <main id="container">
      <div className="dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="dots2">
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
      </div>
      {/* <div className="circle" /> */}
    </main>

  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = ({ children }) => (
  <div className='flex overflow-x-hidden flex-col mx-auto min-w-screen max-w-[1600px]'>
    <Suspense fallback={<Loader />}>
      <Headroom>
        <Navbar />
      </Headroom>
      <MaintainenceModel />
      {children}

      <Footer />
    </Suspense>
  </div>
);
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {

  const [isLoading, setIsLoading] = useState(false);

  // aos animation 
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(delay);
  }, [])


  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        <ModalProvider>
          <Routes>
       
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<MainLayout> <HomePage />  </MainLayout>} />
            <Route path="/l" element={<MainLayout>  <Loader />  </MainLayout>} />
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
