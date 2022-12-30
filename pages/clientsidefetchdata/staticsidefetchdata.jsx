import axios from "axios";
import React from "react";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}

function StaticSideGetData({ data }) {
  return (
    <>
      <ul>
        {data.map((user, idx) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default StaticSideGetData;
