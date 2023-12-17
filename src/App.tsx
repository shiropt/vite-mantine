import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Provider as ReduxProvider } from 'react-redux';
import { ModalsProvider } from '@mantine/modals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from './libs/Auth0/auth0Provider';
import { theme } from './theme';
import { OKButtonModal } from './components/molecules/Modals';
import './style/global.css';
import { RouteProvider } from './libs/Router';
import { store } from './store';

export default function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ReduxProvider store={store}>
          <MantineProvider theme={theme}>
            <ModalsProvider modals={{ OKButtonModal }}>
              <RouteProvider />
            </ModalsProvider>
          </MantineProvider>
        </ReduxProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
}
