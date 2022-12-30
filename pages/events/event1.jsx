import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

function event1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Typography variant="h4">{count}</Typography>
      <Button variant="contained" onClick={() => setCount(count+1)}>Increase</Button>
      <Link href={"/"}>Home</Link>
    </div>
  );
}

export default event1;
