import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Welcome to my course</h2>
      <Link href={"products"}>Go to products page</Link>
      <Link href={"account"}>Go to account page</Link>
    </main>
  );
}
