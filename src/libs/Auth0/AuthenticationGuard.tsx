import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ComponentType, FC } from 'react';
import { Loader } from '../../components/layouts/Loader';

type Props = {
  component: ComponentType;
};

export const AuthenticationGuard: FC<Props> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  return <Component />;
};
