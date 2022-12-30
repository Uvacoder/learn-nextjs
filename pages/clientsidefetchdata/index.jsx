import { useEffect, useState } from "react";
import useSWR from "swr";

const getter = (...args) => fetch(args).then((res) => res.json());
// API: https://jsonplaceholder.typicode.com/users
const api = `http://localhost:3000/api/randomFunc`;
const useUser = (id) => {

  const { isLoading, error, data } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    getter
  );
  return {
    isLoading,
    isError: error,
    user: data,
  };
};

function ClientSideFetchData() {
  const [userId, setUserId] = useState(null);

  const { user, isLoading, isError } = useUser(userId);

  if (isError) return <>Error!</>;
  else
    return (
      <div>
        <input
          type="number"
          name="input"
          id="kaka"
          onChange={(e) => setUserId(e.target.value)}
        />
        {/* <button onClick={(e) => setUserId(input.value)}>Submit</button> */}
        <ul>{isLoading ? <>Loading...</> : <>{user.name}</>}</ul>
      </div>
    );
}

export default ClientSideFetchData;
