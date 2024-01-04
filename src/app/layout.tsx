'use client';

import { GlobalStyle } from '@/styles/global';
import StyledComponentsRegistry from './lib/resgistry';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <ThemeProvider theme={defaultTheme}>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <GlobalStyle />
        </body>
      </ThemeProvider>
    </html>
  );
}
