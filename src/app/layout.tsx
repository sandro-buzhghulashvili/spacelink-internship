import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import Navbar from './components/Navbar/Navbar';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'IdentityHub',
  description: 'Protect your privacy online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-primary_background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
