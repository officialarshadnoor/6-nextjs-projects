// fetch

import Link from "next/link";

async function fetchListofUsers() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();

    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Serverside() {
  const listOfusers = await fetchListofUsers();
  console.log(listOfusers);
  return (
    <div className="p-10">
      <h1>List of users</h1>
      <ul>
        {listOfusers && listOfusers.length > 0
          ? listOfusers.map((user) => (
              <li className="mt-5 cursor-pointer">
                <Link href={`/server-side-data-fetch/${user.id}`}>
                  {user.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
