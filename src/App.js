
import Home from './components/home'
import About from './components/about'
import Education from './components/education';
import Carear from './components/cobjective';
import Skill from './components/skill';
import Project from './components/project';
import Experience from './components/experiencs';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
