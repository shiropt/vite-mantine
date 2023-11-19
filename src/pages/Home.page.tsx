import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { Button } from '../components/atoms/Button';

export function HomePage() {
  const { logout } = useAuth0();

  return (
    <Box ta="center">
      <Welcome />
      <Button
        mt="xl"
        onClick={() => {
          logout();
        }}
      >
        ログアウト
      </Button>
    </Box>
  );
}
