import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Menu from './components/menu/Menu.component';
import Competences from './pages/Competences.page';
import Contact from './pages/Contact.page';
import Experiences from './pages/Experiences.page';
import Formations from './pages/Formations.page';
import Home from './pages/Home.page';
import Portfolio from './pages/Portfolio.page';

const App = () => {
  return (
    <div className="flex">
      <Router basename="/portfolio-deploy">
        <Menu />
        <main
          id="main"
          className="bg-main-color font-poppins min-h-screen w-5/6 px-2"
        >
          <Routes>
            <Route
              path="/portfolio-deploy/formations"
              element={<Formations />}
            />
            <Route
              path="/portfolio-deploy/competences"
              element={<Competences />}
            />
            <Route
              path="/portfolio-deploy/experiences"
              element={<Experiences />}
            />
            <Route path="/portfolio-deploy/portfolio" element={<Portfolio />} />
            <Route path="/portfolio-deploy/contact" element={<Contact />} />
            <Route path="/portfolio-deploy/*" element={<Home />} />
          </Routes>
        </main>
      </Router>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
