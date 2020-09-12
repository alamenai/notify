import { createContext } from "react"

const initialState = {
    type: "info",
    visibile: true,
    setVisible: () => { },
    darkmode: false
}
const NotificationContext = createContext(initialState)

export default NotificationContext