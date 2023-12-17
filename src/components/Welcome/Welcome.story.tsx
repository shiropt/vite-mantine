import { Welcome } from './Welcome';

export default {
  title: 'Welcome',
};

export const Usage = () => (
  <Welcome
    account={{ name: 'NAME', email: 'sample.com', picture: 'https://picsum.photos/id/237/200/300' }}
  />
);
