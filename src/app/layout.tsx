import type { Metadata } from 'next';
import ThemeComponent from '~/@core/themes/ThemeComponent';
import StyledComponentsRegistry from '~/@core/themes/themeRegistry';
import ReactQueryComponent from '~/libs/react-query/ReactQueryComponent';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryComponent>
          <ThemeComponent>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ThemeComponent>
        </ReactQueryComponent>
      </body>
    </html>
  );
}
