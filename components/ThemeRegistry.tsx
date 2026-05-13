"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeColors } from "@/lib";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: themeColors.primary,
      contrastText: "#FFF8ED",
    },
    secondary: {
      main: themeColors.secondary,
      contrastText: "#FFF8ED",
    },
    warning: {
      main: themeColors.accent,
    },
    background: {
      default: themeColors.background,
      paper: "#FFFCF5",
    },
    text: {
      primary: themeColors.text,
      secondary: "rgba(62, 39, 35, 0.72)",
    },
  },
  typography: {
    fontFamily: "var(--font-body)",
    h1: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 0.98,
    },
    h2: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.05,
    },
    h3: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      letterSpacing: 0,
    },
    h4: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      letterSpacing: 0,
    },
    h5: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      letterSpacing: 0,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          minHeight: 48,
          paddingInline: 24,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
