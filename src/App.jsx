import { Navbar, Beranda, Program, ProgramDetail, Checkout, Bayar, Kontak } from './components';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/program" element={<Program />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/program/checkout/:id" element={<Checkout />} />
        <Route path="/program/checkout/bayar/:id" element={<Bayar />} />
        <Route path="kontak" element={<Kontak />} />
      </Routes>
    </div>
  )
}

export default App
