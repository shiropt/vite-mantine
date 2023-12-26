import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { Welcome } from '../components/Welcome/Welcome';
import { Button } from '../components/atoms/Button';
import { useDispatch, useSelector } from '../hooks/redux';
import { actions as accountActions } from '../modules/account';
import { actions as todoActions } from '../modules/todo';
import { CheckBox } from '../components/atoms/CheckBox';
import { Input } from '../components/atoms/Input';
import { TextArea } from '../components/atoms/TextArea';
import {
  useGetTodListQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../modules/todo/api';
import { Loader } from '../components/layouts/Loader';

export function HomePage() {
  const { data: todoList, isFetching, isLoading } = useGetTodListQuery(undefined);
  const [deleteTodo] = useDeleteTodoMutation();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const [editId, setEditId] = useState('');
  const { onSubmit, getInputProps, reset, setValues } = useForm({
    initialValues: {
      title: '',
      description: '',
      isDone: false,
    },
  });

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

  const rows =
    isFetching || isLoading || !todoList ? (
      <Table.Tr>
        <Table.Td>
          <Loader />
        </Table.Td>
      </Table.Tr>
    ) : (
      todoList.map((todo) => (
        <Table.Tr key={todo.id}>
          <Table.Td>
            <CheckBox
              checked={todo.isDone}
              onChange={async () =>
                todoActions.updateTodo(dispatch, { ...todo, isDone: !todo.isDone })
              }
            />
          </Table.Td>
          <Table.Td>{todo.title}</Table.Td>
          <Table.Td>{todo.description}</Table.Td>
          <Table.Td>
            {editId === todo.id ? (
              <>
                <Button
                  onClick={() => {
                    setEditId('');
                    reset();
                  }}
                >
                  キャンセル
                </Button>
                <Button type="submit">編集完了</Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setEditId(todo.id!);
                  setValues({
                    isDone: todo.isDone,
                    title: todo.title,
                    description: todo.description,
                  });
                }}
                color="green"
              >
                編集
              </Button>
            )}
          </Table.Td>
          <Table.Td>
            <Button
              onClick={async () => {
                deleteTodo(todo.id);
              }}
              color="red"
            >
              削除
            </Button>
          </Table.Td>
        </Table.Tr>
      ))
    );
  return (
    <Box ta="center">
      <form
        onSubmit={onSubmit((v) => {
          if (editId) {
            updateTodo({ ...v, id: editId });
            setEditId('');
          } else {
            addTodo(v);
          }
          reset();
        })}
      >
        <Button
          mt="xl"
          onClick={() => {
            logout();
          }}
        >
          ログアウト
        </Button>
        <Welcome account={account} />
        <Flex justify="center" ta="left">
          <Box>
            <Input
              required
              mb="xs"
              label="title"
              placeholder="titleを入力"
              w="400"
              {...getInputProps('title')}
            />
            <TextArea
              mb="xs"
              label="description"
              placeholder="descriptionを入力"
              w="400"
              {...getInputProps('description')}
            />
            <Box ta="right">
              <Button type="submit">ADD</Button>
            </Box>
          </Box>
        </Flex>
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
      </form>
    </Box>
  );
}
