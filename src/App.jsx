import './App.css'
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills'
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';

function App() {
return (
    <>
        <Hero />
        <Projects />
        <Skills />
        <Footer />
    </>
    )
}

export default App
