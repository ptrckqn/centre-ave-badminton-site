import Image from 'next/image';
import Container from '../components/Container';
import Typography from '../components/Typography';

const Home = () => {
  return (
    <div>
      <Container>
        <div className="absolute top-1/2 transform -translate-y-1/2 z-10 w-48">
          <Typography component="h1" className="text-white">
            Calgary’s Premier Badminton Facility
          </Typography>
        </div>
        <div className="hero">
          <Image src="/img/hero.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="h-full w-full bg-black absolute left-0 top-0 bg-opacity-30" />
      </Container>
    </div>
  );
};

export default Home;
