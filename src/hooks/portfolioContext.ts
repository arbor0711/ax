import { createContext } from "react";
import { Project, projectsInfo } from "../data/data";

interface PortfolioContextProps {
  visibility?: boolean;
  showcaseData?: Project;
  // handleCallback: (data: Project) => void;
  onClose: () => void;
  onFlip: (id: number) => void;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  // setShowcaseData: React.Dispatch<React.SetStateAction<Project | undefined>>;
}

export const PortfolioContext = createContext<PortfolioContextProps>({
  visibility: false,
  showcaseData: projectsInfo[0],
  // handleCallback: () => {},
  onClose: () => {
    console.log("onClose passed");
  },
  onFlip: () => {
    console.log("onFlip passed");
  },
  setVisibility: () => {},
  // setShowcaseData: () => {},
});
