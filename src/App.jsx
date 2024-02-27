
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MainPage } from './pages/mainPage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { GoodsPage } from './pages/goodsPage';
import { BasketPage } from './pages/basketPage';
import { PersonalPage } from './pages/personalPage';
import { setUser } from './slices/userSlice';
import { useDispatch } from 'react-redux';
import { useGetUserQuery } from './query/userApiSlice';
import { useHttp } from './hooks/useHttp';




function App() {
  const dispatch = useDispatch();
  // const id = localStorage.getItem("userId")
  // console.log(id);
  // const { data } = useGetUserQuery("x8m1HZZWYrd9eE9lqxY0e19EL4H2");
  // console.log(data);
  // dispatch(setUser(data));
  const { request } = useHttp();
  
  if (localStorage.getItem("userId") !== "null" && localStorage.getItem("userId") !== null) {
    
    request("http://localhost:3001/users")
      .then(data => data.filter(serverUser => serverUser.id === localStorage.getItem("userId")))
      .then(data => dispatch(setUser({
        name: data[0].name,
        email: data[0].email,
        id: data[0].id,
        status: data[0].status,
        basket: data[0].basket,
        history: data[0].history
      })))
  }


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

        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
