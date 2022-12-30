import { useRouter } from "next/router";
import React from "react";

function BlogPage() {
  const data = useRouter();
  let { params } = data.query;
  return <div>Your blog path: {params && params.join("/")}</div>;
}

export default BlogPage;
