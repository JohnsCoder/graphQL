import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { GET_USER } from "../App";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
export default function NewUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  async function handleCreateUser(e: FormEvent) {
    e.preventDefault();

    if (!name || !email) {
      return;
    }
    
    console.log(error)
    console.log(data);
    await createUser({
      variables: {
        name,
        email,
      },
      // refetchQueries: [GET_USER]
      update: (cache, {data: {createUser}}) => {
        const{users} = client.readQuery({query: GET_USER})

        cache.writeQuery({
          query: GET_USER,
          data: {
            users: {
              ...users,
              createUser,
            }
          }
        })
      }
    }
    );

  }

  return (
    <form onSubmit={handleCreateUser}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
