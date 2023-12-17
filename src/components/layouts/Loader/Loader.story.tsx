import { Loader as LoaderComponent } from '.';
import { Welcome } from '../../Welcome/Welcome';

export default {
  title: 'layouts/Loader',
};

export const Loader = () => (
  <div>
    <Welcome
      account={{
        name: 'NAME',
        email: 'sample.com',
        picture: 'https://picsum.photos/id/237/200/300',
      }}
    />
    <LoaderComponent />;
  </div>
);
