import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { theme } from '../src/theme';

export const render = (ui: React.ReactNode, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...testingLibraryRender(<>{ui}</>, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <MantineProvider theme={theme}>
          <BrowserRouter>{children}</BrowserRouter>
        </MantineProvider>
      ),
    }),
    user: userEvent.setup(),
  };
};
