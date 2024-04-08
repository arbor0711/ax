// import { createContext, useContext, useState } from "react";
// import { Project, projectsInfo } from "../data/data";

// // define the type for the context
// interface PortfolioContextProps {
//   visibility?: boolean;
//   toggleState?: () => void;

//   // showcaseData?: Project;
//   // handleCallback: (data: Project) => void;
//   // onClose?: () => void;
//   // onFlip?: (id: number) => void;
//   // setVisibility?: React.Dispatch<React.SetStateAction<boolean>>;
//   // setShowcaseData: React.Dispatch<React.SetStateAction<Project | undefined>>;
// }

// // create the context
// export const PortfolioContext = createContext<
//   PortfolioContextProps | undefined
// >(
//   undefined
//   //   {
//   //   visibility: false,

//   //   showcaseData: projectsInfo[0],
//   //   // handleCallback: () => {},
//   //   onClose: () => {
//   //     console.log("onClose passed");
//   //   },
//   //   onFlip: () => {
//   //     console.log("onFlip passed");
//   //   },
//   //   setVisibility: () => {},
//   //   // setShowcaseData: () => {},
//   //   toggleState: () => {
//   //     console.log("toggleVisibility passed");
//   //   },
//   // }
// );

// // create the custom hook to use the state
// export const useStateContext = () => {
//   const context = useContext(PortfolioContext);
//   if (context === undefined) {
//     throw new Error('useStateContext must be used within a StateProvider');
//   }
//   return context;
// };
// // Create a provider component
// export const StateProvider: React.FC = ({ children }) => {
//   const [state, setState] = useState(true);

//   const toggleState = () => {
//     setState(prevState => !prevState);
//   };

//   // Define the context value
//   const contextValue: PortfolioContextProps = {
//     visibility;
//     toggleState
//   };

//   return (
//     <PortfolioContext.Provider value={contextValue}>
//       {children}
//     </PortfolioContext.Provider>
//   );
// };
