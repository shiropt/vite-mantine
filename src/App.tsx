import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './libs/Router';
import { theme } from './theme';
import './style/global.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
