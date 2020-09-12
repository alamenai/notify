import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Button, Wrapper } from "./Styled"
import Context from "../context"

const Action = ({ name, onClick }) => {

    const { type } = useContext(Context);

    if (!(typeof onClick === "function")) {
        throw new Error("Action event should be a function")
    }

    return (< Wrapper >
        <Button type={type} onClick={onClick}>{name}</Button>
    </Wrapper >)
}

Action.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Action