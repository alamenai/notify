import React, { useState } from "react"
import NotificationContext from "./context"

const WithProvider = Component => {
    const WithContext = props => {
        const [visible, setVisible] = useState(true);
        const type = props.type || "info";
        const darkmode = props.darkmode;
        const value = { type, visible, setVisible, darkmode };

        return (visible && <NotificationContext.Provider value={value} >
            <Component {...props} />
        </NotificationContext.Provider>);
    }
    return WithContext
}

export default WithProvider