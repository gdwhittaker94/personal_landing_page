import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar/>
			<Hero/>
			<AboutMe/>
			<Experience/>
			<Projects/>
			<Articles/>
			<Testimonials/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
