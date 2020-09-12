import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./Styled"
import Header from "./Header"
import Body from "./Body"
import Action from "./Action"
import WithProvider from "./withProvider"

const AVAILABLE_TYPES = [
    "info",
    "warning",
    "success",
    "error"];

const Notification = ({ type, data, style, action, darkmode }) => {

    const defaultStyle = {
        rounded: false,
        animation: "left2right",
        duration: 2
    }
    
    const { title, subtitle, message } = data
    const { animation, rounded, duration } = style || defaultStyle
    const { name, event } = action


    if (!AVAILABLE_TYPES.includes(type)) {
        throw new Error(type + ' is not included in notification types')
    }

    if (duration && !(typeof duration === "number") && !Number(duration)) {
        throw new Error("duration should be a number")
    }

    return (<Wrapper
        type={type}
        animation={animation}
        rounded={rounded}
        darkmode={darkmode}
        duration={duration}>
        <Header title={title} subtitle={subtitle} />
        <Body message={message} />
        <Action name={name} onClick={event} />
    </Wrapper>)
}

Notification.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    style: PropTypes.object,
    action: PropTypes.object.isRequired,
    darkmode: PropTypes.bool
}

Notification.defaultProps = {
    type: "info"
}

export default WithProvider(Notification)
export { Notification }