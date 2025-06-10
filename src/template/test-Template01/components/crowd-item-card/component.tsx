import type { CrowdItemCardProps } from ".";
import { getBasicFields } from "@/core/components/common";
import { DefaultProps } from "../test/config";
import { merge } from "ts-deepmerge";
import { cn } from "@/lib/utils";

export interface Props extends CrowdItemCardProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        title,
        description,
        image,
        link,
    } = merge(DefaultProps, props) as CrowdItemCardProps;

    return (
        <div
            className={cn(
                "flex flex-col gap-2",
            )}
            // style={{
            //     "--title-font": title.font,
            //     "--title-weight": title.weight,
            //     "--title-size": title.size,
            //     "--title-line-height": title.lineHeight,
            //     "--title-spacing": title.spacing,
            //     "--title-align": title.align,
            //     "--description-font": description.font,
            // }}
        >

        </div>
    )
}