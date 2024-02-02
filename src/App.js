
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MainPage } from './pages/mainPage';


function App() {
  return (
    <>
      <Router>
        <Header />
        <MainPage/>
        <Footer />
      </Router>

    </>

  );
}

export default App;
