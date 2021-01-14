import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Rates & Services', href: '/rates-and-services' },
  { name: 'Book', href: '/book' },
  { name: 'Contact', href: '/contact' },
];

const Nav = () => {
  return (
    <nav className="py-1 container mx-auto max-w-screen-xl flex justify-between items-center">
      <div className="h-16 w-16 bg-blue-dark" />
      <ul className="">
        {NAV_LINKS.map(({ name, href }, i) => {
          const isLast = i === NAV_LINKS.length - 1;
          return (
            <li className={`${isLast ? '' : 'mr-12'} inline font-bold text-blue-dark text-lg`}>
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
