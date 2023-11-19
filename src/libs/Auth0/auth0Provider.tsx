import { Auth0Provider, AppState } from '@auth0/auth0-react';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID, VITE_AUTH0_CALLBACK_URL } = import.meta.env;
const domain = VITE_AUTH0_DOMAIN;
const clientId = VITE_AUTH0_CLIENT_ID;
const redirectUri = VITE_AUTH0_CALLBACK_URL;

type Props = {
  children: ReactNode;
};

export const Auth0ProviderWithNavigate: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
