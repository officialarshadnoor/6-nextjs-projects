import AddNewUser from "@/components/add-new-user";
import React from "react";
import { fetchUserAction } from "../actions";
import SingleUserCard from "@/components/single-user-card";

export default async function UserManagement() {
  const getListOfUser = await fetchUserAction();
  return (
    <div className="p-20 max-2-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {getListOfUser &&
        getListOfUser.data &&
        getListOfUser.data.length > 0 ? (
          getListOfUser.data.map((userItem) => (
            <SingleUserCard user={userItem} />
          ))
        ) : (
          <h2>No data available</h2>
        )}
      </div>
    </div>
  );
}
