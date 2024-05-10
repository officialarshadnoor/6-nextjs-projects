import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrectBlogID = searchParams.get("id");

    if (!getCurrectBlogID) {
      return NextResponse.json({
        success: false,
        message: "Blog id is required",
      });
    }

    const deleteCurrectBlogByID = await Blog.findByIdAndDelete(
      getCurrectBlogID
    );
    if (deleteCurrectBlogByID) {
      return NextResponse.json({
        success: true,
        message: "Post is deleted",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
