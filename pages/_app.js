import '../styles/tailwind.css';
import 'typeface-montserrat';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }) => {
  return (
    <div className="relative font-sans">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
