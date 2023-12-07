import './App.scss';
import Navbar from './components/navbar/nav';
import HomePage from './components/home/home';
import AboutUs from './components/about/about';
import Discover from './components/discover/discover';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="discover">
          <Discover />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
