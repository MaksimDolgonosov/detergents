
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MainPage } from './pages/mainPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { GoodsPage } from './pages/goodsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/goods" element={<GoodsPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
