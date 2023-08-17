import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import WelcomeKit from './pages/WelcomeKit/Welcomekit';
import './assets/sass/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InternationalWelcomeKit from './pages/InternationalWelcomeKit/InternationalWelcomeKit';
import DiwaliGifts from './pages/Diwali/Index';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/employee-welcome-kit' element={<WelcomeKit />} />
          <Route path='/international-welcome-kit' element={<InternationalWelcomeKit />} />
          <Route path='/corporate-diwali-gifts-for-employees' element={<DiwaliGifts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
