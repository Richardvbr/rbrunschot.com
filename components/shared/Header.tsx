'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'clsx';

import Logo from '@/public/logo.svg';
import type { LinkProps } from '@/types';

const links: LinkProps[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Links',
    href: '/links',
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="main-header bg-primary relative top-0 z-20 md:sticky">
      <nav className="text-secondary mx-auto flex items-center justify-between gap-3 px-4 py-6 md:px-6 lg:max-w-[850px]">
        <Link href="/" className="text-primary">
          <Logo />
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                className={cn(
                  'hover:text-primary rounded-lg text-sm text-[15px] transition-colors',
                  href === pathname && 'text-primary'
                )}
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
