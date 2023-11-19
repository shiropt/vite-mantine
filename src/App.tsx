import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from './libs/Auth0/auth0Provider';
import { theme } from './theme';
import { OKButtonModal } from './components/molecules/Modals';
import './style/global.css';
import { RouteProvider } from './libs/Router';

export default function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <MantineProvider theme={theme}>
          <ModalsProvider modals={{ OKButtonModal }}>
            <RouteProvider />
          </ModalsProvider>
        </MantineProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
}
