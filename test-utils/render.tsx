import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { ModalsProvider } from '@mantine/modals';
import { theme } from '../src/theme';
import { OKButtonModal } from '../src/components/molecules/Modals';

export const render = (ui: React.ReactNode, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...testingLibraryRender(<>{ui}</>, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <MantineProvider theme={theme}>
          <ModalsProvider modals={{ OKButtonModal }}>
            <BrowserRouter>{children}</BrowserRouter>
          </ModalsProvider>
        </MantineProvider>
      ),
    }),
    user: userEvent.setup(),
  };
};
