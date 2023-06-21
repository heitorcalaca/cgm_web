"use client";
import { QueryClient, QueryClientProvider } from 'react-query';
import './globals.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const queryClient = new QueryClient();

const RootLayout = ({ children, component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <html>
          <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          `}</style>
          <body>
            {children}
          </body>
        </html>
      </Provider>
    </QueryClientProvider>
  );
}

export default RootLayout;
