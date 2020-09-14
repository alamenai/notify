import { createContext } from "react"

const initialState = {
    color: null,
    type: "info",
    visibile: true,
    setVisible: () => { },
    darkmode: false
}
const NotificationContext = createContext(initialState)

export default NotificationContext