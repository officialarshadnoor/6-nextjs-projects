// Import necessary components and hooks
import { Fragment, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  setLoading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) {
  console.log(blogFormData); // For debugging, you can remove this line in production

  return (
    <Fragment>
      {/* Button to open the dialog */}
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>

      {/* Dialog component for adding a new blog */}
      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDialog(false);
          // Reset form data when dialog is closed
          setBlogFormData({
            title: "",
            description: "",
          });
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          {/* Dialog content including form inputs */}
          <DialogHeader>
            <DialogTitle>Add New Blog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Input for Blog Title */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placeholder="Enter blog title"
                value={blogFormData.title}
                id="title"
                className="col-span-3"
                onChange={(event) => {
                  setBlogFormData({
                    ...blogFormData,
                    title: event.target.value,
                  });
                }}
              />
            </div>
            {/* Input for Blog Description */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                placeholder="Enter description"
                value={blogFormData.description}
                onChange={(event) => {
                  setBlogFormData({
                    ...blogFormData,
                    description: event.target.value,
                  });
                }}
                className="col-span-3"
              />
            </div>
          </div>
          {/* Dialog footer with save button */}
          <DialogFooter>
            <Button onClick={handleSaveBlogData}>
              {loading ? "Saving changes" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
