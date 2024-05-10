"use server";

import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

// add new user action
export async function addNewUSerAction(formData, pathToRevalidate) {
  await connectToDB();

  try {
    // validate data using joi
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Ptry try again..",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured! Ptry try again..",
    };
  }
}
// fetch user action
export async function fetchUserAction() {
  await connectToDB();
  try {
    const listOfUsers = await User.find({});
    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again!",
      };
    }
  } catch (error) {
    console.log(error);
  }
}

// delete user action
export default async function deleteUserAction(
  currentUserID,
  pathToRevalidate
) {
  await connectToDB();
  try {
    const deleteUser = await User.findByIdAndDelete(currentUserID);
    if (deleteUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong.. Please try again!",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong.. Please try again!",
    };
  }
}

// edit user action
