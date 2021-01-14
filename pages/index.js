import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
import Typography from '../components/Typography';
import Card from '../components/Card';
import Button from '../components/Button';

const FACILITY_FEATURES = [
  { name: '13 BWF Approved Yonex Courts', img: '/svg/court.svg' },
  { name: "Alberta's Largest YONEX Badminton Pro-Shop", img: '/svg/yonex.svg' },
  { name: 'Professional Workout Area', img: '/svg/dumbbell.svg' },
];

const Home = () => {
  return (
    <>
      <div className="hero relative">
        <div className="mx-auto container max-w-screen-xl">
          <div className="absolute top-1/2 transform -translate-y-1/2 z-10 w-48 z-20">
            <Typography component="h1" gutterBottom className="text-white">
              Calgary’s Premier Badminton Facility
            </Typography>

            <div className="flex">
              <Link href="/">
                <a>
                  <Button className="mr-4">View Hours</Button>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <Button color="white">Book Now</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-black absolute left-0 top-0 bg-opacity-40 z-10" />

        <Image src="/img/hero.jpg" layout="fill" objectFit="cover" quality={100} />
      </div>

      <Container>
        <Typography component="h2" className="text-blue-dark" gutterBottom>
          Facility Features
        </Typography>

        {FACILITY_FEATURES.map(({ name, img }) => {
          return (
            <Card className="mr-12" key={name}>
              <div className="w-56">
                <div className="rounded-full w-20 h-20 bg-blue-main mb-6 p-4 grid place-items-center">
                  <img src={img} />
                </div>
                <Typography component="h6">{name}</Typography>
              </div>
            </Card>
          );
        })}
      </Container>

      <Container color="bg-gray-100">
        <Typography component="h2" className="text-blue-dark" gutterBottom>
          About Us
        </Typography>
        <div className="flex justify-between">
          <div className="paragraph">
            <Typography component="p" gutterBottom>
              CENTRE AVENUE BADMINTON is Alberta's best badminton facility, founded and designed by professional athletes in consultation with enthusiasts and design professionals.
            </Typography>
            <Typography component="p">
              We’ve taken every detail into account, working with leaders in the market such as Connor Sports and Yonex to build out a perfect playing experience for you. The play area surface conforms to BWF tournament regulations, with specialized lighting, ceilings, and air flow systems to ensure
              you have the best game possible.{' '}
            </Typography>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://goo.gl/maps/y5ZWKmHsxvLkPmHa6" target="__blank" className="flex items-center mb-3">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                    <path
                      d="M14 0C8.85366 0 4.66663 4.18704 4.66663 9.33335C4.66663 10.8783 5.05288 12.4101 5.78717 13.7687L13.4896 27.6992C13.5921 27.8849 13.7875 28 14 28C14.2124 28 14.4078 27.8849 14.5104 27.6992L22.2156 13.7641C22.9471 12.4101 23.3333 10.8782 23.3333 9.3333C23.3333 4.18704 19.1463 0 14 0ZM14 14C11.4268 14 9.33333 11.9065 9.33333 9.33335C9.33333 6.7602 11.4268 4.6667 14 4.6667C16.5731 4.6667 18.6666 6.7602 18.6666 9.33335C18.6666 11.9065 16.5731 14 14 14Z"
                      fill="#31489A"
                    />
                  </svg>

                  <Typography>Unit 110 - 225 23 Street NE, Calgary, AB</Typography>
                </a>
              </li>

              <li>
                <a href="mailto:contact@c-ave.ca" className="flex items-center mb-3">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                    <path d="M18.5605 14.1436L28 20.1111V7.92407L18.5605 14.1436Z" fill="#31489A" />
                    <path d="M0 7.92407V20.1111L9.4395 14.1436L0 7.92407Z" fill="#31489A" />
                    <path d="M26.25 4.375H1.75005C0.876801 4.375 0.183801 5.026 0.0525513 5.86425L14 15.0535L27.9475 5.86425C27.8163 5.026 27.1233 4.375 26.25 4.375Z" fill="#31489A" />
                    <path
                      d="M16.9575 15.2004L14.4813 16.8314C14.3343 16.9277 14.168 16.9749 14 16.9749C13.832 16.9749 13.6658 16.9277 13.5188 16.8314L11.0425 15.1987L0.0560303 22.1479C0.19078 22.9792 0.88028 23.6249 1.75003 23.6249H26.25C27.1198 23.6249 27.8093 22.9792 27.944 22.1479L16.9575 15.2004Z"
                      fill="#31489A"
                    />
                  </svg>

                  <Typography>contact@c-ave.ca</Typography>
                </a>
              </li>

              <li>
                <a href="tel:4032071313" className="flex items-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                    <g clip-path="url(#clip0)">
                      <path
                        d="M27.2379 20.5492L23.3304 16.6417C21.9349 15.2462 19.5625 15.8044 19.0042 17.6186C18.5856 18.8746 17.1901 19.5724 15.9341 19.2932C13.143 18.5954 9.37509 14.9671 8.67733 12.0364C8.25867 10.7804 9.09599 9.38488 10.352 8.96628C12.1662 8.40807 12.7244 6.03567 11.3288 4.64014L7.42135 0.732653C6.30493 -0.244218 4.63029 -0.244218 3.65342 0.732653L1.00191 3.38416C-1.64959 6.17522 1.28102 13.5715 7.84001 20.1305C14.399 26.6895 21.7953 29.7597 24.5864 26.9686L27.2379 24.3171C28.2148 23.2007 28.2148 21.526 27.2379 20.5492Z"
                        fill="#31489A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <Typography>403 207 1313</Typography>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container color="bg-gray-100">
        <Typography component="h2" className="text-center text-gray-400 tracking-wide mb-8">
          OFFICIAL HOME OF
        </Typography>
        <div className="mx-auto paragraph w-full flex justify-between px-12">
          <div className="w-36 h-36 bg-gray-400" />
          <div className="w-36 h-36 bg-gray-400" />
        </div>
      </Container>
    </>
  );
};

export default Home;
