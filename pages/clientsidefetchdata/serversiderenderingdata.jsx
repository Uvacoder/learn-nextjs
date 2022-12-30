import axios from "axios";

// const getter = (...args) => fetch(args).then((res) => res.json());
// // API: https://jsonplaceholder.typicode.com/users
// const useUser = (id) => {
//   const { isLoading, error, data } = useSWR(
//     `https://jsonplaceholder.typicode.com/users/${id}`,
//     getter
//   );
//   return {
//     isLoading,
//     isError: error,
//     user: data,
//   };
// };
const ServerSideRenderingPage = ({ data }) => {
  // const { user, isLoading, isError } = useUser(userId);

  return <div>{data && JSON.stringify(data)}</div>;
};

export default ServerSideRenderingPage;

export const getServerSideProps = async (context) => {
  // GETS THE DATA
  const query = context.query;
  const { id } = query;
  console.log(query);
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      headers: { "Accept-Encoding": "gzip, compress" },
    }
  );
  const data = res.data;

  return {
    props: { data },
  };
};
