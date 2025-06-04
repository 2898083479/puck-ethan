"use client";

import { BookPlus } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// create a new page button
const NewPageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathName, setPathName] = useState("");

  const createNewPage = async (pathName: string) => {
    console.log(pathName);
  };

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className="text-tp hover:text-ts"
        onClick={() => setIsOpen(true)}
      >
        <BookPlus size={20} />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[400px]">
          <DialogHeader>
            <DialogTitle>New Page</DialogTitle>
            <div className="flex flex-col gap-2">
              <Label>Path Name</Label>
              <Input
                value={pathName}
                onChange={(e) => setPathName(e.target.value)}
              />
            </div>
          </DialogHeader>
          <DialogFooter>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => createNewPage(pathName)}>Create</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewPageButton;
