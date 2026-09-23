import type { StaticImageData } from "next/image";

// Importing the respective visual assets for the circular frames
import missionImg from "../../public/images/ourmission.png";
import visionImg from "../../public/images/ourvision.png";

export type CoreValueItem = {
  id: number;
  slug: "mission" | "vision";
  heading: "Mission" | "Vision";
  description: string;
  image: StaticImageData;
};

export const coreValues: CoreValueItem[] = [
  {
    id: 1,
    slug: "mission",
    heading: "Mission",
    description: "To make property discovery and investment decisions more transparent, informed and customer-focused by combining market knowledge, project research and personalised advisory.",
    image: missionImg,
  },
  {
    id: 2,
    slug: "vision",
    heading: "Vision",
    description: "To become a trusted real estate advisory brand connecting buyers and investors with quality property opportunities across Pune and selected markets in India.",
    image: visionImg,
  },
];

export const coreValueMap = Object.fromEntries(
  coreValues.map((item) => [item.slug, item])
) as Record<string, CoreValueItem>;