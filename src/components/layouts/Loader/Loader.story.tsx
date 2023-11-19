import { Loader as LoaderComponent } from '.';
import { Welcome } from '../../Welcome/Welcome';

export default {
  title: 'layouts/Loader',
};

export const Loader = () => (
  <div>
    <Welcome />
    <LoaderComponent />;
  </div>
);
