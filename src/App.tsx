import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Router } from './libs/Router';
import { theme } from './theme';
import './style/global.css';
import { OKButtonModal } from './components/molecules/Modals';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider modals={{ OKButtonModal }}>
        <Router />
      </ModalsProvider>
    </MantineProvider>
  );
}
