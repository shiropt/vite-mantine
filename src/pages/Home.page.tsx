import { useAuth0 } from '@auth0/auth0-react';
import { Box, Table } from '@mantine/core';
import { useEffect } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { Button } from '../components/atoms/Button';
import { useDispatch, useSelector } from '../hooks/redux';
import { actions as accountActions } from '../modules/account';
import { actions as todoActions } from '../modules/todo';
import { CheckBox } from '../components/atoms/CheckBox';

export function HomePage() {
  const { logout, user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(accountActions.setAccount(user));
    }
    (async () => {
      await todoActions.fetchTodoList(dispatch);
    })();
  }, []);

  const account = useSelector((state) => state.account);
  const todoList = useSelector((state) => state.todo);

  const rows = todoList.map((todo) => (
    <Table.Tr key={todo.id}>
      <Table.Td>
        <CheckBox
          checked={todo.isDone}
          onChange={async () => todoActions.updateTodo(dispatch, { ...todo, isDone: !todo.isDone })}
        />
      </Table.Td>
      <Table.Td>{todo.title}</Table.Td>
      <Table.Td>{todo.description}</Table.Td>
      <Table.Td>
        <Button color="green">編集</Button>
      </Table.Td>
      <Table.Td>
        <Button
          onClick={async () => {
            await todoActions.deleteTodo(dispatch, todo);
          }}
          color="red"
        >
          削除
        </Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Box ta="center">
      <Button
        mt="xl"
        onClick={() => {
          logout();
        }}
      >
        ログアウト
      </Button>
      <Welcome account={account} />
      <Table mt="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>is Done</Table.Th>
            <Table.Th>title</Table.Th>
            <Table.Th>description</Table.Th>
            <Table.Th>edit</Table.Th>
            <Table.Th>delete</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody ta="left">{rows}</Table.Tbody>
      </Table>
    </Box>
  );
}
