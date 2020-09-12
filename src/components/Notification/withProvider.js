import React, { useState } from "react"
import Context from "./context"

const WithProvider = Component => {
    const WithContext = props => {
        const [visible, setVisible] = useState(true);
        const type = props.type || "info";
        const darkmode = props.darkmode;
        const value = { type, visible, setVisible, darkmode };

        return (visible && <Context.Provider value={value} >
            <Component {...props} />
        </Context.Provider>);
    }
    return WithContext
}

export default WithProvider