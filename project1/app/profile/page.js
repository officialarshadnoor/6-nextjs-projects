import { redirect } from "next/navigation";

export default function Accounts() {
  const userProfileInfo = null;

  if (userProfileInfo === null) redirect("profile");

  return <h1>Accounts page</h1>;
}
