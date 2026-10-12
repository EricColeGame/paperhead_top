import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Compass, Map, ScrollText, Swords, Users } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Compass, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "weapons", path: "/weapons", icon: Swords, isContentType: true },
  { key: "levels", path: "/levels", icon: Map, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Boxes, isContentType: true },
  { key: "release", path: "/release", icon: ScrollText, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
