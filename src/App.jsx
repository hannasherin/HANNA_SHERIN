
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';


import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Hanna Sherin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
