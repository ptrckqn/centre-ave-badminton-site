import Container from '../Container';
import Typography from '../Typography';

const Footer = () => {
  const YEAR = new Date().getFullYear();

  return (
    <footer>
      <Container color="bg-gray-200">
        <div className="mx-auto h-36 w-36 bg-blue-dark mb-6" />

        <Typography className="text-gray-400 text-right">&copy; {YEAR} CENTRE AVENUE BADMINTON, all rights reserved.</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
