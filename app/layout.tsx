import type { Metadata } from 'next';
import { outfit } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Recipe Page',
  description: 'Challenge by Frontend Mentor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='img/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
