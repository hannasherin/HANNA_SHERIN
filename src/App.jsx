
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';


import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Hanna Sherin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
