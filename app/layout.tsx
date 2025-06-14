import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Himanshu Rupala - Full Stack Developer',
  description: 'Experienced full-stack developer specializing in React, Node.js, and modern web technologies. Creating exceptional digital experiences.',
  keywords: 'full stack developer, react developer, node.js, typescript, web development, software engineer',
  authors: [{ name: 'Himanshu Rupala' }],
  creator: 'Himanshu Rupala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'Himanshu Rupala - Full Stack Developer',
    description: 'Experienced full-stack developer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Himanshu Rupala Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu Rupala - Full Stack Developer',
    description: 'Experienced full-stack developer specializing in React, Node.js, and modern web technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}