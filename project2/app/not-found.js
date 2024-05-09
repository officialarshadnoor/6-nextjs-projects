import { Link } from "lucide-react";
import React from "react";

function NotFound() {
  return (
    <div>
      <h1>This page can not be found.</h1>
      <Link href={"/"}>Go to home</Link>
    </div>
  );
}

export default NotFound;
