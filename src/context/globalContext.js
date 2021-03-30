import React, {createContext, useReducer, useContext} from "react"

//define context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

//reducer
const globalReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                currentTheme: action.theme
            }
        }
        default: {
            throw new Error(`Unhandled action type : $(action.type)`)
        }
    }
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, {
      currentTheme:
        typeof window !== "undefined"
          ? window.localStorage.getItem("theme") === null
            ? "dark"
            : window.localStorage.getItem("theme")
          : "dark",
      cursorType: false,
      cursorStyles: ["pointer", "hovered"],
    })
// export const GlobalProvider = ({children}) => {
//     const [state, dispatch] = useReducer (globalReducer, {
//         currentTheme: window.localStorage.getItem('theme') == null ? 'dark' : window.localStorage.getItem('theme'),
//     })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

//custom hoooks to use dispatch and state

export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)