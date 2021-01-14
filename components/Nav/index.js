import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Rates & Services', href: '/rates-and-services' },
  { name: 'Book', href: '/book' },
  { name: 'Contact', href: '/contact' },
];

const Nav = () => {
  return (
    <nav className="py-8 container mx-auto max-w-screen-xl flex justify-between">
      <div>/ LOGO /</div>
      <ul className="">
        {NAV_LINKS.map(({ name, href }, i) => {
          const isLast = i === NAV_LINKS.length - 1;
          return (
            <li className={`${isLast ? '' : 'mr-12'} inline font-bold text-blue-800 text-xl`}>
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
