import { render, screen } from '@test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(
      <Welcome
        account={{
          name: 'NAME',
          email: 'sample.com',
          picture: 'https://picsum.photos/id/237/200/300',
        }}
      />
    );
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
