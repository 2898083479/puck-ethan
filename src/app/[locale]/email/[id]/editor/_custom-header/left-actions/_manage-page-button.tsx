"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { FilePen } from "lucide-react";

// manage page button
export const ManagePageButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className="text-tp hover:text-ts"
        onClick={() => setIsOpen(true)}
      >
        <FilePen size={20} />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[400px]">
          <DialogHeader>
            <DialogTitle>Manage Page</DialogTitle>
            <div className="flex flex-col gap-2">
              {mockData.map((page) => {
                return (
                  <div
                    key={page.name}
                    className="flex justify-between items-center"
                  >
                    <span>{page.pathname}</span>
                    <span className="flex gap-2">
                      <Button
                        variant="destructive"
                        className="text-tp hover:text-ts"
                      >
                        Delete
                      </Button>
                      <Button
                        variant="secondary"
                        className="text-tp hover:text-ts"
                      >
                        Edit
                      </Button>
                    </span>
                  </div>
                );
              })}
            </div>
          </DialogHeader>
          <DialogFooter>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="text-tp hover:text-ts"
              >
                Cancel
              </Button>
              <Button variant="destructive" className="text-tp hover:text-ts">
                Delete
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

const mockData = [
  {
    name: "Page 1",
    pathname: "/email/1/page-1",
  },
  {
    name: "Page 2",
    pathname: "/email/1/page-2",
  },
  {
    name: "Page 3",
    pathname: "/email/1/page-3",
  },
];
