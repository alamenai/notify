import React, { useContext } from "react"
import { Wrapper } from "./Styled"
import Context from "../../context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faExclamationCircle,
    faCheckCircle,
    faExclamationTriangle,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons'

const Icon = () => {

    const { type } = useContext(Context)

    return (<Wrapper type={type}>
        <FontAwesomeIcon
            icon={setIcon(type)}
            size="2x" />
    </Wrapper>)
}

const setIcon = (type = "info") => {
    switch (type.toLowerCase()) {
        case "info":
            return faExclamationCircle;
        case "success":
            return faCheckCircle;
        case "warning":
            return faExclamationTriangle;
        case "error":
            return faTimesCircle;
        default:
            return faExclamationCircle
    }
}

export default Icon
export { setIcon }