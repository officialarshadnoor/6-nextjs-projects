import BlogOverview from "@/components/blog-overview";
import React from "react";

async function fetchListOfBlog() {
  try {
    const apiResponse = await fetch("http://localhost:3001/api/get-blogs", {
      method: "GET",
      cache: "no-store",
    });
    const result = await apiResponse.json();
    return result?.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Blogs() {
  const blogList = await fetchListOfBlog();

  console.log(blogList);
  return (
    <div>
      <BlogOverview blogList={blogList} />
    </div>
  );
}
