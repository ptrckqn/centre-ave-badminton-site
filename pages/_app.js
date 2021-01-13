import '../styles/tailwind.css';
const App = ({ Component, pageProps }) => {
  return (
    <div className="relative font-sans">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
