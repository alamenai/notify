import { createContext } from "react"

const initialState = {
    type: "info",
    visibile: true,
    setVisible: () => { },
    darkmode: false
}
const context = createContext(initialState)

export default context