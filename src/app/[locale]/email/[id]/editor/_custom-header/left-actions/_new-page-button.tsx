"use client"

import { BookPlus } from "lucide-react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// create a new page button
const NewPageButton = () => {

    const [isOpen, setIsOpen] = useState(false);

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
            <Dialog
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <DialogContent
                    className="w-[400px]"
                >
                    <DialogHeader>
                        <DialogTitle>New Page</DialogTitle>
                        <DialogDescription>
                            Create a new page
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button>Create</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewPageButton;