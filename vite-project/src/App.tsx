import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react/hooks";
import NewUserForm from "./components/newUserForm";

type User = {
  id: string;
  name: string;
  email: string;
};

export const GET_USER = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">

      {data?.users.map((user) => (
        <ul key={user.id}>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
      ))}
      <NewUserForm />
    </div>
  );
}

export default App;
