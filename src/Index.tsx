import Navbar from './components/navbar/nav';
import HomePage from './pages/home/home';
import Footer from './pages/footer/footer';
import Contact from './pages/contact/contact';
import ToTop from './components/toTop/top';
import AboutUs from './pages/about/about';
import Discover from './pages/discover/discover';
import './App.scss';

const Index = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
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
        <ToTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
