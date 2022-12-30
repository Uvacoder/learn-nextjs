import { Button, CircularProgress, LinearProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NarBar from "../../src/components/NavBar";

function IndexBlogPage({ blogs }) {
  const route = useRouter();
  return (
    <>
      <ul>
        {blogs ? (
          blogs.map((link, index) => (
            <li key={index}>
              <Link href={`/blog/${encodeURIComponent(link)}`}>{link}</Link>
            </li>
          ))
        ) : (
          <LinearProgress sx={{ width: "200px" }} />
        )}
      </ul>
      <Button variant="contained" onClick={_ => route.push("/")}>
        Back to Home
      </Button>
    </>
  );
}

export default IndexBlogPage;

export const getStaticProps = async (_) => {
  let data = [];
  // setTimeout(() => {
  data = ["/nhatkilaptrinh", "/laptrinhnhanh", "/laptrinhcham", "/chatgpt"];
  // }, 1000);
  return {
    props: {
      blogs: data,
    },
  };
};
