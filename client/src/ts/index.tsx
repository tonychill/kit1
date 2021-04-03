import { Hit } from "react-instantsearch-core";
export interface AuthSession {
  isAuthenticated: boolean;
}
export interface ButtonProps {
  onClick: () => void;
  text: string;
}



export interface SearchProps {
  hits: Hit[];
  currentRefinement: string;
  refine: (value?: unknown) => void;
  toggleModal?: () => void;
}

export interface NavProps {
  navLinks: NavLink[];
}

export type NavLink = {
  text: string;
  url: string;
};

export interface FilterButtonProps {
  size: number;
  viewbox?: string;
  rx?: number;
  fill?: string;
}

export interface LayoutProps {
  meta?: PageMetaData;
}

type PageMetaData = {
  title: string | undefined;
  description: string;
};
