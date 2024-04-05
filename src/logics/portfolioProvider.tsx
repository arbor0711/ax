// // import React, { useContext, useState } from "react";
// // import { Project, projectsInfo } from "../data/data";
// // import { PortfolioContext } from "../hooks/portfolioContext";

// // const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
// //   // const [visibility, setVisibility] = useState(false);
// //   // const [showcaseData, setShowcaseData] = useState<Project>();

// //   // const handleCallback = (data: Project) => {
// //   //   setVisibility(!visibility);
// //   //   setShowcaseData(data);
// //   // };
// //   // const onClose = () => {
// //   //   setVisibility(!visibility);
// //   // };
// //   // const onFlip = (id: number) => {
// //   //   const data = projectsInfo.find((project) => project.id === id);
// //   //   setShowcaseData(data); // Add a default value of undefined to ensure showcaseData is always of type Project
// //   // };

// //   if (showcaseData)
// //     return (
// //       <PortfolioContext.Provider
// //         value={{
// //           visibility,
// //           showcaseData: showcaseData,
// //           handleCallback,
// //           onClose,
// //           onFlip,
// //           setVisibility,
// //           setShowcaseData,
// //         }} // Add setShowcaseData to the value object
// //       >
// //         {children}
// //       </PortfolioContext.Provider>
// //     );
// // };

// // const usePortfolioContext = () => {
// //   const context = useContext(PortfolioContext);
// //   if (context === undefined) {
// //     throw new Error(
// //       "usePortfolioContext must be used within a PortfolioProvider"
// //     );
// //   }
// //   return context;
// // };

// // export { PortfolioProvider, usePortfolioContext };

// import React, {
//   useState,
//   createContext,
//   useMemo,
//   useCallback,
//   useContext,
//   useReducer,
// } from "react";
// const AddTodoButton = () => {
//   const dispatch = useContext(TodosDispatch);
//   return (
//     <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add Todo</button>
//   );
// };

// const RemoveAllButton = () => {
//   const dispatch = useContext(TodoDispatch);
//   return (
//     <button onClick={() => dispatch({ type: "REMOVE_ALL" })}>
//       Remove All Todo
//     </button>
//   );
// };

// const Actions = () => {
//   return (
//     <div>
//       <AddTodoButton />
//       <RemoveAllButton />
//     </div>
//   );
// };

// const MenuOnTop = () => {
//   <div>
//     <Actions />
//   </div>;
// };

// const TodosDispatch = createContext(null);

// const TodoList = () => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "add":
//         return { todos: [...state.todos, {}] };
//       case "removeAll":
//         return { todos: [] };
//       default:
//         return state;
//     }
//     const [state, dispatch] = useReducer(reducer);
//     return (
//       <div className="todo-list">
//         <TodosDispatch.Provider value={dispatch}>
//           <MenuOnTop />
//           //...state.todos
//         </TodosDispatch.Provider>
//       </div>
//     );
//   };
//   // const [todos, setTodos] = useState([]);
//   // const addTodo = useCallback(()=>{setTodos=>[...prevTodos, {}]);
//   // const removeAll = useCallback(()=>setTodos([]), []);

//   // const getApi = useMemo(()=>({addTodo, removeAll}), [])

//   // return (
//   //   <div >
//   //     <TodosApi.Provider value-{getApi()}>
//   //       <MenuOnTop />
//   //       // ...state.todos
//   //     </TodosApi.Provider>
//   //   </div>
//   // )
// };

// // https://medium.com/trabe/passing-callbacks-down-with-react-hooks-4723c4652aff
// // https://stackoverflow.com/questions/77313452/how-to-pass-a-refresh-callback-via-usecontext-that-uses-a-hook
// // https://medium.com/comsystoreply/how-to-use-react-context-with-usestate-c8ae4fe72fb9
// // https://stackoverflow.com/questions/62366824/how-can-%C4%B1-pass-function-with-state-for-react-usecontext

import { projectsInfo } from "../data/data";
import { PortfolioContext } from "./../hooks/portfolioContext";
import React, { useState } from "react";

export const PortfolioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Here just set the default values for the context. No matter what, the values will read from context file not provider.
  let showcaseData = projectsInfo[0];
  let onClose = () => {};
  let onFlip = () => {};
  const [visibility, setVisibility] = useState(false);

  <PortfolioContext.Provider
    value={{ visibility, setVisibility, showcaseData, onClose, onFlip }}
  >
    {children}
  </PortfolioContext.Provider>;
};
