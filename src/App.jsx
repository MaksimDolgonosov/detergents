
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MainPage } from './pages/mainPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { GoodsPage } from './pages/goodsPage';
import { BasketPage } from './pages/basketPage';
import { PersonalPage } from './pages/personalPage';
import { OrderPage } from './pages/orderPage';
import { HistoryPage } from './pages/historyPage';





function App() {
  // fetch("http://localhost:3001/categories", {

  //   headers: {
  //     mode: "no-cors",
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // })
  //   .then(res => res.json())
  //   .then(res => console.log(res))


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/goods" element={<GoodsPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
