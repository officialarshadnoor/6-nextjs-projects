"use client";

import { usePathname } from "next/navigation";

export default function Cart() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <h1>This is cart component</h1>
    </div>
  );
}
