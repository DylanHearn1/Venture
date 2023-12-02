import './App.scss';
import Navbar from './components/navbar/nav';
import HomePage from './components/home/home';
import AboutUs from './components/about/about';
import Discover from './components/discover/discover';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <HomePage />
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <Discover />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
