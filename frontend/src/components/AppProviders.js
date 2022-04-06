import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { darkTheme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SnackbarProvider from "react-simple-snackbar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { HistoryProvider } from "../context/historyContext";
import { MenuItemsProvider } from "../context/menuItemsContext";
import { PlaylistProvider } from "../context/playlistContext";
import { ModalProvider } from "../context/modalContext";

const queryClient = new QueryClient({
  queries: {
    refetchOnWindowFocus: false,
    retry(failureCount, error) {
      if (error.status === 404) return false;
      else if (failureCount < 2) return true;
      else return false;
    },
  },
});

function AppProviders({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <SnackbarProvider>
            <ThemeProvider theme={darkTheme}>
              <GlobalStyles />
              <ReactQueryDevtools />
              <HistoryProvider>
                <PlaylistProvider>
                  <ModalProvider>
                    <MenuItemsProvider>{children}</MenuItemsProvider>
                  </ModalProvider>
                </PlaylistProvider>
              </HistoryProvider>
            </ThemeProvider>
          </SnackbarProvider>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default AppProviders;
