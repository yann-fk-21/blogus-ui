import type { Metadata } from 'next';
import { Spline_Sans_Mono } from 'next/font/google';
import './globals.css';

const spline = Spline_Sans_Mono({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Blogus | Main',
  description: 'Blog Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spline.className}>{children}</body>
    </html>
  );
}
