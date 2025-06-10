import type { BasicProps } from "@/core/components/types"

export interface CrowdItemCardProps extends BasicProps {
    title: string;
    description: string;
    image: string;
    link: string;
}