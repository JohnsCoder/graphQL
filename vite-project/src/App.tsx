import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react/hooks";

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const {data} = useQuery(GET_USER)
  console.log(data)
  return <div className="App">hello world</div>;
}

export default App;
