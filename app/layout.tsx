import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/shared/Header';
import '@/styles/globals.css';

const seoTitle = 'Richard van Brunschot | Front-end Developer';
const seoDescription = 'Richard van Brunschot, front-end developer.';

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/apple-touch-icon',
      },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  other: {
    'msapplication-TileColor': '#000000',
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: 'https://brunschot.dev/',
    siteName: seoTitle,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto px-4 md:px-6 lg:max-w-[850px]">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
