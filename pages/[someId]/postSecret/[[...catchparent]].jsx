import { useRouter } from "next/router";
import React from "react";

export default function letsee() {
  const data = useRouter();
  return <div>This is catchparent: {JSON.stringify(data.query)}</div>;
}
