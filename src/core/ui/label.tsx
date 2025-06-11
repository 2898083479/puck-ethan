import { FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const labelVariants = cva("flex", {
    variants: {
        size: {
            md: "text-lg leading-none font-medium mb-5",
            sm: "text-base font-medium mb-4",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

export const Label = ({
    children,
    className,
    isRequired,
    size,
    ...props
}: React.ComponentProps<"label"> &
    VariantProps<typeof labelVariants> & {
        isRequired?: boolean;
    }) => {
    return (
        <FormLabel
            className={cn(
                labelVariants({ size }),
                isRequired &&
                "after:content-['*'] after:text-red-500 after:ml-1",
                className,
            )}
            {...props}
        >
            {children}
        </FormLabel>
    );
};