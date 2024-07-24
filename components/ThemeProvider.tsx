// @/components/ThemeProvider.tsx

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme: string;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
}) => {
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
