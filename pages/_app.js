import '../styles/tailwind.css';
import 'typeface-montserrat';
import Nav from '../components/Nav';

const App = ({ Component, pageProps }) => {
  return (
    <div className="relative font-sans">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
