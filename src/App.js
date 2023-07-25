import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './components/menu/Menu.component';
import Home from './pages/Home.page';
import Competences from './pages/Competences.page';
import Portfolio from './pages/Portfolio.page';
import Contact from './pages/Contact.page';
import Formations from './pages/Formations.page';
import Experiences from './pages/Experiences.page';
import './App.css';

const App = () => {
  const baseUrl = 'https://willl-8523.github.io/portfolio-deploy';

  return (
    <div className="flex">
      <Router basename={baseUrl}>
        <Menu />
        <main
          id="main"
          className="bg-main-color font-poppins min-h-screen w-5/6 px-2"
        >
          <Routes>
            <Route path="formations" element={<Formations />} />
            <Route path="competences" element={<Competences />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Router>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
